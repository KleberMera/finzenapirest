export interface AmortizationDTO {
  debt_id: number;
  number_months: number;
  date: string;
  quota: number;
  interest: number;
  amortized: number;
  outstanding: number;
  status: string;
}
