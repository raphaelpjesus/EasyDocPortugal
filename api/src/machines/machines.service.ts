import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type CreateMachineDto = {
  name: string;
  serial: string;
  companyId?: string;
  isActive?: boolean;
};

@Injectable()
export class MachinesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateMachineDto) {
    return this.prisma.machine.create({
      data: {
        name: data.name,
        serial: data.serial,
        companyId: data.companyId ?? null,
        isActive: data.isActive ?? true,
      },
    });
  }

  list() {
    return this.prisma.machine.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  listWorksites(machineId: string) {
    return this.prisma.worksiteMachine.findMany({
      where: {
        machineId,
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
