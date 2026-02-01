import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import type { Response } from 'express';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly docs: DocumentsService) {}

  @Post()
  async create(
    @Body() body: CreateDocumentDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.docs.create(body);

    // 201 se criou, 200 se já existia (dedupe)
    res.status(result.created ? 201 : 200);

    return result.document;
  }

  @Get()
  listAll() {
    return this.docs.listAll();
  }

  @Get('company/:companyId')
  listByCompany(@Param('companyId') companyId: string) {
    return this.docs.listByCompany(companyId);
  }

  @Get('worker/:workerId')
  listByWorker(@Param('workerId') workerId: string) {
    return this.docs.listByWorker(workerId);
  }

  @Get('machine/:machineId')
  listByMachine(@Param('machineId') machineId: string) {
    return this.docs.listByMachine(machineId);
  }

  @Get(':documentId/worksites')
  listWorksites(@Param('documentId') documentId: string) {
    return this.docs.listWorksites(documentId);
  }
}
