import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MachinesService } from './machines.service';

type CreateMachineDto = {
  name: string;
  serial: string;
  companyId?: string;
  isActive?: boolean;
};

@Controller()
export class MachinesController {
  constructor(private readonly machines: MachinesService) {}

  @Post('machines')
  create(@Body() body: CreateMachineDto) {
    return this.machines.create(body);
  }

  @Get('machines')
  list() {
    return this.machines.list();
  }

  @Get('machines/:machineId/worksites')
  listWorksites(@Param('machineId') machineId: string) {
    return this.machines.listWorksites(machineId);
  }
}
