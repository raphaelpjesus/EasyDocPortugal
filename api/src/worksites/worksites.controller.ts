import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WorksitesService } from './worksites.service';

@Controller('worksites')
export class WorksitesController {
  constructor(private readonly worksites: WorksitesService) {}

  @Post()
  create(@Body() body: any) {
    return this.worksites.create(body);
  }

  @Get()
  list() {
    return this.worksites.list();
  }

  @Post(':worksiteId/companies')
  addCompany(@Param('worksiteId') worksiteId: string, @Body() body: any) {
    return this.worksites.addCompany(worksiteId, body);
  }

  @Get(':worksiteId/companies')
  listCompanies(@Param('worksiteId') worksiteId: string) {
    return this.worksites.listCompanies(worksiteId);
  }

  @Post(':worksiteId/workers')
  addWorker(@Param('worksiteId') worksiteId: string, @Body() body: any) {
    return this.worksites.addWorker(worksiteId, body);
  }

  @Get(':worksiteId/workers')
  listWorkers(@Param('worksiteId') worksiteId: string) {
    return this.worksites.listWorkers(worksiteId);
  }

  @Post(':worksiteId/machines')
  addMachine(@Param('worksiteId') worksiteId: string, @Body() body: any) {
    return this.worksites.addMachine(worksiteId, body);
  }

  @Get(':worksiteId/machines')
  listMachines(@Param('worksiteId') worksiteId: string) {
    return this.worksites.listMachines(worksiteId);
  }
}
