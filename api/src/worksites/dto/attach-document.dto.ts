import { IsBoolean, IsOptional, IsUUID } from 'class-validator';

export class AttachDocumentDto {
  @IsUUID()
  documentId!: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
