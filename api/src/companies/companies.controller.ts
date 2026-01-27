import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CompaniesService } from './companies.service';

type CreateCompanyDto = {
  name: string;
  emailMain?: string;
  emailSub?: string;
  isActive?: boolean;
};

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companies: CompaniesService) {}

  @Get()
  findAll() {
    return this.companies.findAll();
  }

  @Post()
  create(@Body() body: CreateCompanyDto) {
    return this.companies.create(body);
  }

  @Get(':companyId/worksites')
  listWorksites(@Param('companyId') companyId: string) {
    return this.companies.listWorksites(companyId);
  }
}
