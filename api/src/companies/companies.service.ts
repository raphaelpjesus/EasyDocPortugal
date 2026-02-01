import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type CreateCompanyDto = {
  name: string;
  emailMain?: string;
  emailSub?: string;
  isActive?: boolean;
};

@Injectable()
export class CompaniesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.company.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  create(data: CreateCompanyDto) {
    // evita crash se body vier undefined ou sem name
    if (!data || typeof data.name !== 'string' || !data.name.trim()) {
      throw new BadRequestException('Campo "name" é obrigatório.');
    }

    return this.prisma.company.create({
      data: {
        name: data.name.trim(),
        emailMain: data.emailMain ?? null,
        emailSub: data.emailSub ?? null,
        isActive: data.isActive ?? true,
      },
    });
  }

  listWorksites(companyId: string) {
    return this.prisma.worksiteCompany.findMany({
      where: {
        companyId,
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
