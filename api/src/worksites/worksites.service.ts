import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type CreateWorksiteDto = {
  name: string;
  location?: string;
  startsAt?: string;
  endsAt?: string;
  isActive?: boolean;
};

@Injectable()
export class WorksitesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateWorksiteDto) {
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

  list() {
    return this.prisma.worksite.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  addCompany(worksiteId: string, companyId: string) {
    return this.prisma.worksiteCompany.create({
      data: { worksiteId, companyId },
    });
  }

  listCompanies(worksiteId: string) {
    return this.prisma.worksiteCompany.findMany({
      where: { worksiteId, isActive: true },
      include: { company: true },
      orderBy: { joinedAt: 'desc' },
    });
  }

  addWorker(worksiteId: string, workerId: string) {
    return this.prisma.worksiteWorker.create({
      data: { worksiteId, workerId },
    });
  }

  listWorkers(worksiteId: string) {
    return this.prisma.worksiteWorker.findMany({
      where: { worksiteId, isActive: true },
      include: { worker: true },
      orderBy: { joinedAt: 'desc' },
    });
  }

  addMachine(worksiteId: string, machineId: string) {
    return this.prisma.worksiteMachine.create({
      data: { worksiteId, machineId },
    });
  }

  listMachines(worksiteId: string) {
    return this.prisma.worksiteMachine.findMany({
      where: { worksiteId, isActive: true },
      include: { machine: true },
      orderBy: { joinedAt: 'desc' },
    });
  }
}
