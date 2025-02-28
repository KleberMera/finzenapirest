import { Decimal } from "@prisma/client/runtime/library";

export interface TransactionDTO {
  category_id: number;
  name: string;
  description: string;
  amount: Decimal;
  date: string;
  time: string;
}