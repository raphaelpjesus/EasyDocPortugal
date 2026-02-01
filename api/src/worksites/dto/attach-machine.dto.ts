import { IsBoolean, IsOptional, IsUUID } from 'class-validator';

export class AttachMachineDto {
  @IsUUID()
  machineId!: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
