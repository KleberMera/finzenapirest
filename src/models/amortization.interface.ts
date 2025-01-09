import { Decimal } from "@prisma/client/runtime/library";

export interface AmortizationDTO {
  number_months: number;
  date: string;
  quota: Decimal;
  interest: Decimal;
  amortized: Decimal;
  outstanding: Decimal;
  status: string;
}
