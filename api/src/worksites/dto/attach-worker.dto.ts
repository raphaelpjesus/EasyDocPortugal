import { IsBoolean, IsOptional, IsUUID } from 'class-validator';

export class AttachWorkerDto {
  @IsUUID()
  workerId!: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
