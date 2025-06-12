
import { Decimal } from 'generated/prisma/runtime/library';
import { AmortizationDTO } from './amortization.interface';
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export interface DebtDTO {
  id?: number;
  user_id: number;
  name: string;
  description: string;
  amount: Decimal;
  interest_rate: Decimal;
  duration_months: number;
  duration_type: string;
  method: string;
  start_date: string;
  end_date: string;
  status: string;
  amortizations: AmortizationDTO;
}

export class UpdateAllStatusDto {
  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  ids: number[];

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsString()
  payment_date: string;
}

// Ya teníamos este DTO de antes
export class UpdateDebtAmortizationsDto {
  @IsNotEmpty()
  @IsNumber()
  debtId: number;

  @IsNotEmpty()
  @IsDateString()
  untilDate: string;

  @IsNotEmpty()
  @IsString()
  status: string;
}


export class UpdateStatusDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsString()
  payment_date: string;
}