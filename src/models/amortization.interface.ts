import { Decimal } from "generated/prisma/runtime/library";


export interface AmortizationDTO {
  number_months: number;
  date: string;
  quota: Decimal;
  interest: Decimal;
  amortized: Decimal;
  outstanding: Decimal;
  payment_date: string;
  status: string;

}
