import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type CreateWorkerDto = {
  companyId: string;
  fullName: string;
  email: string;
  isActive?: boolean;
};

@Injectable()
export class WorkersService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateWorkerDto) {
    return this.prisma.worker.create({
      data: {
        companyId: data.companyId,
        fullName: data.fullName,
        email: data.email,
        isActive: data.isActive ?? true,
      },
    });
  }

  listByCompany(companyId: string) {
    return this.prisma.worker.findMany({
      where: { companyId, isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  listWorksites(workerId: string) {
    return this.prisma.worksiteWorker.findMany({
      where: {
        workerId,
        isActive: true,
      },
      include: {
        worksite: true,
      },
      orderBy: {
        joinedAt: 'desc',
      },
    });
  }
}
