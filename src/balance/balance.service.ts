import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BalanceService {
  private prisma = new PrismaClient();

  async getMonthlyBalance(userId: number, currentMonth: number, currentYear: number, previousMonth: number, previousYear: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    const { monthStart: currentMonthStart, monthEnd: currentMonthEnd } = this.getMonthRange(currentMonth, currentYear);
    const { monthStart: previousMonthStart, monthEnd: previousMonthEnd } = this.getMonthRange(previousMonth, previousYear);

    const [currentData, previousData] = await Promise.all([
      this.getMonthData(userId, currentMonthStart, currentMonthEnd),
      this.getMonthData(userId, previousMonthStart, previousMonthEnd)
    ]);

    return {
      currentMonthData: {
        ...currentData,
        balance: currentData.totalIncome - currentData.totalExpenses
      },
      previousMonthData: {
        ...previousData,
        balance: previousData.totalIncome - previousData.totalExpenses
      }
    };
  }

  private getMonthRange(month: number, year: number) {
    const monthStart = new Date(year, month - 1, 1);
    const monthEnd = new Date(year, month, 0);
    return { monthStart, monthEnd };
  }

  private async getMonthData(userId: number, start: Date, end: Date) {
    const [income, expenses] = await Promise.all([
      this.getTransactionsTotal(userId, 'Ingreso', start, end),
      this.getTransactionsTotal(userId, 'Gasto', start, end)
    ]);

    return {
      totalIncome: Number(income._sum?.amount || 0),
      totalExpenses: Number(expenses._sum?.amount || 0)
    };
  }

  private async getTransactionsTotal(
    userId: number,
    type: string,
    start: Date,
    end: Date
  ) {
    return this.prisma.transaction.aggregate({
      _sum: { amount: true },
      where: {
        date: { gte: start.toISOString(), lte: end.toISOString() },
        category: {
          user_id: userId,
          type: type
        }
      }
    });
  }
}
