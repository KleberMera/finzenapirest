import { Decimal } from "generated/prisma/runtime/library";

export interface TransactionDTO {
  category_id: number;
  name: string;
  description: string;
  amount: Decimal;
  date: string;
  time: string;
}


export interface TransactionReport {
  id?: number;
  category_id: number;
  name: string;
  description: string;
  amount: number;
  date: string;
  type?: string;
  payment_method?: string
  category: Category;
  time: string;
  createdAt?: string;
  
}

export interface Category {
  id: number;
  user_id?: number;
  name: string;
  type: string;
  icon: string;
}