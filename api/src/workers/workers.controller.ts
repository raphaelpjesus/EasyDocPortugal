import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WorkersService } from './workers.service';

type CreateWorkerDto = {
  companyId: string;
  fullName: string;
  email: string;
  isActive?: boolean;
};

@Controller()
export class WorkersController {
  constructor(private readonly workers: WorkersService) {}

  @Post('workers')
  create(@Body() body: CreateWorkerDto) {
    return this.workers.create(body);
  }

  @Get('companies/:companyId/workers')
  listByCompany(@Param('companyId') companyId: string) {
    return this.workers.listByCompany(companyId);
  }

  @Get('workers/:workerId/worksites')
  listWorksites(@Param('workerId') workerId: string) {
    return this.workers.listWorksites(workerId);
  }
}
