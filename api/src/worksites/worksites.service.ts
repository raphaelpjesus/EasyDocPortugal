import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorksiteDto } from './dto/create-worksite.dto';
import { AttachCompanyDto } from './dto/attach-company.dto';
import { AttachWorkerDto } from './dto/attach-worker.dto';
import { AttachMachineDto } from './dto/attach-machine.dto';
import { AttachDocumentDto } from './dto/attach-document.dto';

type DocSource = 'WORKSITE' | 'COMPANY' | 'WORKER' | 'MACHINE';

type WorksiteAllDocsItem = {
  source: DocSource;
  link: any | null;     // WorksiteDocument quando source=WORKSITE, senão null
  document: any;        // Document
};

@Injectable()
export class WorksitesService {
  constructor(private readonly prisma: PrismaService) {}

  // =========================
  // Worksites
  // =========================
  async create(data: CreateWorksiteDto) {
    return this.prisma.worksite.create({
      data: {
        name: data.name,
        location: data.location ?? null,
        startsAt: data.startsAt ? new Date(data.startsAt) : null,
        endsAt: data.endsAt ? new Date(data.endsAt) : null,
        isActive: data.isActive ?? true,
      },
    });
  }

  async listAll() {
    return this.prisma.worksite.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getByIdOrThrow(worksiteId: string) {
    const ws = await this.prisma.worksite.findUnique({ where: { id: worksiteId } });
    if (!ws) throw new NotFoundException('Worksite não encontrada.');
    return ws;
  }

  // =========================
  // Link Company <-> Worksite
  // =========================
  async addCompany(worksiteId: string, body: AttachCompanyDto) {
    await this.getByIdOrThrow(worksiteId);

    const company = await this.prisma.company.findUnique({ where: { id: body.companyId } });
    if (!company) throw new NotFoundException('Company não encontrada.');

    return this.prisma.worksiteCompany.create({
      data: {
        worksiteId,
        companyId: body.companyId,
        isActive: body.isActive ?? true,
      },
    });
  }

  async listCompanies(worksiteId: string) {
    await this.getByIdOrThrow(worksiteId);

    return this.prisma.worksiteCompany.findMany({
      where: { worksiteId, isActive: true },
      orderBy: { joinedAt: 'desc' },
      include: { company: true },
    });
  }

  // =========================
  // Link Worker <-> Worksite
  // =========================
  async addWorker(worksiteId: string, body: AttachWorkerDto) {
    await this.getByIdOrThrow(worksiteId);

    const worker = await this.prisma.worker.findUnique({ where: { id: body.workerId } });
    if (!worker) throw new NotFoundException('Worker não encontrado.');

    return this.prisma.worksiteWorker.create({
      data: {
        worksiteId,
        workerId: body.workerId,
        isActive: body.isActive ?? true,
      },
    });
  }

  async listWorkers(worksiteId: string) {
    await this.getByIdOrThrow(worksiteId);

    return this.prisma.worksiteWorker.findMany({
      where: { worksiteId, isActive: true },
      orderBy: { joinedAt: 'desc' },
      include: { worker: true },
    });
  }

  // =========================
  // Link Machine <-> Worksite
  // =========================
  async addMachine(worksiteId: string, body: AttachMachineDto) {
    await this.getByIdOrThrow(worksiteId);

    const machine = await this.prisma.machine.findUnique({ where: { id: body.machineId } });
    if (!machine) throw new NotFoundException('Machine não encontrada.');

    return this.prisma.worksiteMachine.create({
      data: {
        worksiteId,
        machineId: body.machineId,
        isActive: body.isActive ?? true,
      },
    });
  }

  async listMachines(worksiteId: string) {
    await this.getByIdOrThrow(worksiteId);

    return this.prisma.worksiteMachine.findMany({
      where: { worksiteId, isActive: true },
      orderBy: { joinedAt: 'desc' },
      include: { machine: true },
    });
  }

  // =========================
  // Link Document <-> Worksite
  // =========================
  async addDocument(worksiteId: string, body: AttachDocumentDto) {
    await this.getByIdOrThrow(worksiteId);

    const doc = await this.prisma.document.findUnique({ where: { id: body.documentId } });
    if (!doc) throw new NotFoundException('Document não encontrado.');

    return this.prisma.worksiteDocument.create({
      data: {
        worksiteId,
        documentId: body.documentId,
        isActive: body.isActive ?? true,
      },
    });
  }

  async listDocuments(worksiteId: string) {
    await this.getByIdOrThrow(worksiteId);

    return this.prisma.worksiteDocument.findMany({
      where: { worksiteId, isActive: true },
      orderBy: { joinedAt: 'desc' },
      include: { document: true },
    });
  }

  // =========================
  // ✅ NOVO — Documentos “efetivos” da obra
  // WORKSITE + COMPANY + WORKER + MACHINE (dedupe por document.id)
  // =========================
  async listDocumentsAll(worksiteId: string) {
    await this.getByIdOrThrow(worksiteId);

    // 1) IDs ativos na obra
    const [wsCompanies, wsWorkers, wsMachines] = await Promise.all([
      this.prisma.worksiteCompany.findMany({
        where: { worksiteId, isActive: true },
        select: { companyId: true },
      }),
      this.prisma.worksiteWorker.findMany({
        where: { worksiteId, isActive: true },
        select: { workerId: true },
      }),
      this.prisma.worksiteMachine.findMany({
        where: { worksiteId, isActive: true },
        select: { machineId: true },
      }),
    ]);

    const companyIds = wsCompanies.map((x) => x.companyId);
    const workerIds = wsWorkers.map((x) => x.workerId);
    const machineIds = wsMachines.map((x) => x.machineId);

    // 2) Documentos ligados diretamente à obra
    const worksiteLinks = await this.prisma.worksiteDocument.findMany({
      where: { worksiteId, isActive: true },
      include: { document: true },
      orderBy: { joinedAt: 'desc' },
    });

    const items: WorksiteAllDocsItem[] = [];
    const seenDocIds = new Set<string>();

    for (const link of worksiteLinks) {
      if (!link.document) continue;
      items.push({ source: 'WORKSITE', link, document: link.document });
      seenDocIds.add(link.document.id);
    }

    // 3) Documentos herdados (empresa / trabalhador / máquina)
    const [companyDocs, workerDocs, machineDocs] = await Promise.all([
      companyIds.length
        ? this.prisma.document.findMany({
            where: { ownerType: 'COMPANY', companyId: { in: companyIds } },
            orderBy: { createdAt: 'desc' },
          })
        : Promise.resolve([]),
      workerIds.length
        ? this.prisma.document.findMany({
            where: { ownerType: 'WORKER', workerId: { in: workerIds } },
            orderBy: { createdAt: 'desc' },
          })
        : Promise.resolve([]),
      machineIds.length
        ? this.prisma.document.findMany({
            where: { ownerType: 'MACHINE', machineId: { in: machineIds } },
            orderBy: { createdAt: 'desc' },
          })
        : Promise.resolve([]),
    ]);

    for (const d of companyDocs) {
      if (seenDocIds.has(d.id)) continue;
      items.push({ source: 'COMPANY', link: null, document: d });
      seenDocIds.add(d.id);
    }

    for (const d of workerDocs) {
      if (seenDocIds.has(d.id)) continue;
      items.push({ source: 'WORKER', link: null, document: d });
      seenDocIds.add(d.id);
    }

    for (const d of machineDocs) {
      if (seenDocIds.has(d.id)) continue;
      items.push({ source: 'MACHINE', link: null, document: d });
      seenDocIds.add(d.id);
    }

    return {
      worksiteId,
      total: items.length,
      items,
    };
  }
}
