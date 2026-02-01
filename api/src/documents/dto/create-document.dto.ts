import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  Validate,
  ValidateIf,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Transform } from 'class-transformer';

export enum DocumentOwnerType {
  COMPANY = 'COMPANY',
  WORKER = 'WORKER',
  MACHINE = 'MACHINE',
}

export enum DocumentStatus {
  VALID = 'VALID',
  EXPIRING = 'EXPIRING',
  EXPIRED = 'EXPIRED',
  MISSING = 'MISSING',
  PENDING_REVIEW = 'PENDING_REVIEW',
  REJECTED = 'REJECTED',
}

function toDateOrUndefined(v: any): Date | undefined {
  if (v === null || v === undefined || v === '') return undefined;
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

function toTrimmedStringOrUndefined(v: any): string | undefined {
  if (v === null || v === undefined) return undefined;
  const s = String(v).trim();
  return s.length ? s : undefined;
}

@ValidatorConstraint({ name: 'OwnerTypeCoherence', async: false })
class OwnerTypeCoherenceConstraint implements ValidatorConstraintInterface {
  validate(_: any, args: ValidationArguments) {
    const dto = args.object as CreateDocumentDto;

    if (dto.ownerType === DocumentOwnerType.COMPANY) {
      return !!dto.companyId && !dto.workerId && !dto.machineId;
    }
    if (dto.ownerType === DocumentOwnerType.WORKER) {
      return !!dto.workerId && !dto.companyId && !dto.machineId;
    }
    if (dto.ownerType === DocumentOwnerType.MACHINE) {
      return !!dto.machineId && !dto.companyId && !dto.workerId;
    }
    return false;
  }

  defaultMessage() {
    return `ownerType incoerente: COMPANY exige companyId (e não pode ter workerId/machineId); WORKER exige workerId; MACHINE exige machineId.`;
  }
}

@ValidatorConstraint({ name: 'ExpiresAfterIssued', async: false })
class ExpiresAfterIssuedConstraint implements ValidatorConstraintInterface {
  validate(_: any, args: ValidationArguments) {
    const dto = args.object as CreateDocumentDto;
    if (!dto.issuedAt || !dto.expiresAt) return true;

    const issued = dto.issuedAt instanceof Date ? dto.issuedAt : new Date(dto.issuedAt as any);
    const expires = dto.expiresAt instanceof Date ? dto.expiresAt : new Date(dto.expiresAt as any);

    if (Number.isNaN(issued.getTime()) || Number.isNaN(expires.getTime())) return false;
    return expires.getTime() >= issued.getTime();
  }

  defaultMessage() {
    return `expiresAt não pode ser anterior a issuedAt.`;
  }
}

export class CreateDocumentDto {
  // ✅ obrigatório (vendável)
  @IsEnum(DocumentOwnerType)
  ownerType!: DocumentOwnerType;

  // IDs: 1 obrigatório conforme ownerType
  @ValidateIf((o: CreateDocumentDto) => o.ownerType === DocumentOwnerType.COMPANY)
  @IsUUID()
  companyId?: string;

  @ValidateIf((o: CreateDocumentDto) => o.ownerType === DocumentOwnerType.WORKER)
  @IsUUID()
  workerId?: string;

  @ValidateIf((o: CreateDocumentDto) => o.ownerType === DocumentOwnerType.MACHINE)
  @IsUUID()
  machineId?: string;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  docType!: string;

  @IsString()
  @IsNotEmpty()
  fileKey!: string;

  @IsOptional()
  @IsString()
  mimeType?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  fileSize?: number;

  // ✅ checksum opcional (MVP-friendly) mas se vier não pode ser vazio
  @IsOptional()
  @Transform(({ value }) => toTrimmedStringOrUndefined(value))
  @IsString()
  @IsNotEmpty()
  checksum?: string;

  @IsOptional()
  @Transform(({ value }) => toDateOrUndefined(value))
  issuedAt?: Date;

  @IsOptional()
  @Transform(({ value }) => toDateOrUndefined(value))
  expiresAt?: Date;

  @IsOptional()
  @IsEnum(DocumentStatus)
  status?: DocumentStatus;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  // validações cruzadas
  @Validate(OwnerTypeCoherenceConstraint)
  _ownerTypeCoherence!: true;

  @Validate(ExpiresAfterIssuedConstraint)
  _expiresAfter_issued!: true;
}
