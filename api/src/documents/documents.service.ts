import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDocumentDto, DocumentOwnerType } from './dto/create-document.dto';
import { Prisma } from '@prisma/client';

type CreateResult = {
  document: any;
  created: boolean;
};

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  private assertBusinessRules(data: CreateDocumentDto) {
    const hasCompany = !!data.companyId;
    const hasWorker = !!data.workerId;
    const hasMachine = !!data.machineId;

    if (data.ownerType === DocumentOwnerType.COMPANY) {
      if (!hasCompany || hasWorker || hasMachine) {
        throw new BadRequestException(
          'ownerType=COMPANY exige companyId e não pode ter workerId/machineId.',
        );
      }
    }

    if (data.ownerType === DocumentOwnerType.WORKER) {
      if (!hasWorker || hasCompany || hasMachine) {
        throw new BadRequestException(
          'ownerType=WORKER exige workerId e não pode ter companyId/machineId.',
        );
      }
    }

    if (data.ownerType === DocumentOwnerType.MACHINE) {
      if (!hasMachine || hasCompany || hasWorker) {
        throw new BadRequestException(
          'ownerType=MACHINE exige machineId e não pode ter companyId/workerId.',
        );
      }
    }

    if (data.issuedAt && data.expiresAt) {
      const issued = new Date(data.issuedAt as any);
      const expires = new Date(data.expiresAt as any);

      if (Number.isNaN(issued.getTime()) || Number.isNaN(expires.getTime())) {
        throw new BadRequestException('issuedAt/expiresAt inválidos (datas).');
      }
      if (expires.getTime() < issued.getTime()) {
        throw new BadRequestException('expiresAt não pode ser anterior a issuedAt.');
      }
    }
  }

  private getOwnerWhere(data: CreateDocumentDto) {
    if (data.ownerType === DocumentOwnerType.COMPANY) return { companyId: data.companyId! };
    if (data.ownerType === DocumentOwnerType.WORKER) return { workerId: data.workerId! };
    return { machineId: data.machineId! };
  }

  private buildDedupeWhere(data: CreateDocumentDto) {
    const ownerWhere = this.getOwnerWhere(data);

    if (data.checksum) {
      return {
        ownerType: data.ownerType,
        docType: data.docType,
        checksum: data.checksum,
        ...ownerWhere,
      };
    }

    // fallback soft (quando não tem checksum)
    return {
      ownerType: data.ownerType,
      docType: data.docType,
      fileKey: data.fileKey,
      ...ownerWhere,
    };
  }

  async create(data: CreateDocumentDto): Promise<CreateResult> {
    this.assertBusinessRules(data);

    const dedupeWhere = this.buildDedupeWhere(data);

    // 1) Sem checksum -> best effort (não tem unique DB)
    if (!data.checksum) {
      const existing = await this.prisma.document.findFirst({
        where: dedupeWhere as any,
        orderBy: { createdAt: 'desc' },
      });
      if (existing) return { document: existing, created: false };

      const createdDoc = await this.prisma.document.create({
        data: {
          ownerType: data.ownerType as any,
          companyId: data.companyId ?? null,
          workerId: data.workerId ?? null,
          machineId: data.machineId ?? null,

          title: data.title,
          docType: data.docType,
          fileKey: data.fileKey,
          mimeType: data.mimeType ?? null,
          fileSize: data.fileSize ?? null,
          checksum: null,

          issuedAt: (data.issuedAt as any) ?? null,
          expiresAt: (data.expiresAt as any) ?? null,
          status: (data.status as any) ?? 'PENDING_REVIEW',
        },
      });

      return { document: createdDoc, created: true };
    }

    // 2) Com checksum -> race-safe via unique constraint
    try {
      const createdDoc = await this.prisma.document.create({
        data: {
          ownerType: data.ownerType as any,
          companyId: data.companyId ?? null,
          workerId: data.workerId ?? null,
          machineId: data.machineId ?? null,

          title: data.title,
          docType: data.docType,
          fileKey: data.fileKey,
          mimeType: data.mimeType ?? null,
          fileSize: data.fileSize ?? null,
          checksum: data.checksum,

          issuedAt: (data.issuedAt as any) ?? null,
          expiresAt: (data.expiresAt as any) ?? null,
          status: (data.status as any) ?? 'PENDING_REVIEW',
        },
      });

      return { document: createdDoc, created: true };
    } catch (e: any) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
        // alguém criou entre o teu request e o commit
        const existing = await this.prisma.document.findFirst({
          where: dedupeWhere as any,
          orderBy: { createdAt: 'desc' },
        });

        if (existing) return { document: existing, created: false };

        throw new InternalServerErrorException(
          'Falha de dedupe: unique existe mas não foi possível recuperar o registo.',
        );
      }

      throw e;
    }
  }

  async listAll() {
    return this.prisma.document.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async listByCompany(companyId: string) {
    return this.prisma.document.findMany({
      where: { companyId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async listByWorker(workerId: string) {
    return this.prisma.document.findMany({
      where: { workerId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async listByMachine(machineId: string) {
    return this.prisma.document.findMany({
      where: { machineId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async listWorksites(documentId: string) {
    return this.prisma.worksiteDocument.findMany({
      where: { documentId, isActive: true },
      include: { worksite: true },
      orderBy: { joinedAt: 'desc' },
    });
  }
}
