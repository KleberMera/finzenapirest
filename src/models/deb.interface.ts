import { Decimal } from '@prisma/client/runtime/library';
import { AmortizationDTO } from './amortization.interface';

export interface DebtDTO {
  id?: number;
  user_id: number;
  name: string;
  description: string;
  amount: Decimal;
  interest_rate: Decimal;
  duration_months: number;
  method: string;
  start_date: string;
  end_date: string;
  status: string;
  amortizations: AmortizationDTO;
}
