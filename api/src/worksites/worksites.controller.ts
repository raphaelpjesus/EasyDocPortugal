import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WorksitesService } from './worksites.service';
import { CreateWorksiteDto } from './dto/create-worksite.dto';
import { AttachCompanyDto } from './dto/attach-company.dto';
import { AttachWorkerDto } from './dto/attach-worker.dto';
import { AttachMachineDto } from './dto/attach-machine.dto';
import { AttachDocumentDto } from './dto/attach-document.dto';

@Controller('worksites')
export class WorksitesController {
  constructor(private readonly worksites: WorksitesService) {}

  // Worksites
  @Post()
  create(@Body() body: CreateWorksiteDto) {
    return this.worksites.create(body);
  }

  @Get()
  list() {
    return this.worksites.listAll();
  }

  // Companies in worksite
  @Post(':worksiteId/companies')
  addCompany(@Param('worksiteId') worksiteId: string, @Body() body: AttachCompanyDto) {
    return this.worksites.addCompany(worksiteId, body);
  }

  @Get(':worksiteId/companies')
  listCompanies(@Param('worksiteId') worksiteId: string) {
    return this.worksites.listCompanies(worksiteId);
  }

  // Workers in worksite
  @Post(':worksiteId/workers')
  addWorker(@Param('worksiteId') worksiteId: string, @Body() body: AttachWorkerDto) {
    return this.worksites.addWorker(worksiteId, body);
  }

  @Get(':worksiteId/workers')
  listWorkers(@Param('worksiteId') worksiteId: string) {
    return this.worksites.listWorkers(worksiteId);
  }

  // Machines in worksite
  @Post(':worksiteId/machines')
  addMachine(@Param('worksiteId') worksiteId: string, @Body() body: AttachMachineDto) {
    return this.worksites.addMachine(worksiteId, body);
  }

  @Get(':worksiteId/machines')
  listMachines(@Param('worksiteId') worksiteId: string) {
    return this.worksites.listMachines(worksiteId);
  }

  // Documents in worksite
  @Post(':worksiteId/documents')
  addDocument(@Param('worksiteId') worksiteId: string, @Body() body: AttachDocumentDto) {
    return this.worksites.addDocument(worksiteId, body);
  }

  @Get(':worksiteId/documents')
  listDocuments(@Param('worksiteId') worksiteId: string) {
    return this.worksites.listDocuments(worksiteId);
  }

  // ✅ NOVO: documentos efetivos da obra (WORKSITE + COMPANY + WORKER + MACHINE)
  @Get(':worksiteId/documents/all')
  listAllEffectiveDocuments(@Param('worksiteId') worksiteId: string) {
    return this.worksites.listDocumentsAll(worksiteId);
  }
}
