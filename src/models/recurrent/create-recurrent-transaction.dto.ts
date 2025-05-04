// create-recurrent-transaction.dto.ts
import {
  IsString,
  IsOptional,
  IsNumber,
  IsEnum,
  IsDateString,
  IsBoolean,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Decimal } from '@prisma/client/runtime/library';

enum FrequencyType {
  DIARIO = 'Diario',
  SEMANAL = 'Semanal',
  MENSUAL = 'Mensual',
  ANUAL = 'Anual',
  QUINCENAL = 'Quincenal',
}

class TransactionDataDto {
  @IsNumber()
  @IsNotEmpty()
  category_id: number;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNotEmpty()
  amount: Decimal | number;

  @IsString()
  @IsOptional()
  time?: string;
}

export class CreateRecurrentTransactionDto {
  @ValidateNested()
  @Type(() => TransactionDataDto)
  @IsOptional()
  transactionData?: TransactionDataDto;

  @IsEnum(FrequencyType)
  frequency: string;

  @IsDateString()
  nextExecutionDate: string;

  @IsDateString()
  @IsOptional()
  endDate?: string;

  @IsNumber()
  @IsOptional()
  dayOfMonth?: number;

  @IsNumber()
  @IsOptional()
  dayOfWeek?: number;
  isActive: boolean;
}

// update-recurrent-transaction.dto.ts
import { PartialType } from '@nestjs/mapped-types';

export class UpdateRecurrentTransactionDto extends PartialType(
  CreateRecurrentTransactionDto,
) {
  @IsBoolean()
  @IsOptional()
  isRecurring?: boolean;
}
