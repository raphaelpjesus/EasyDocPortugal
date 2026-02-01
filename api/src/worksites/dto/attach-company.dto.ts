import { IsBoolean, IsOptional, IsUUID } from 'class-validator';

export class AttachCompanyDto {
  @IsUUID()
  companyId!: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
