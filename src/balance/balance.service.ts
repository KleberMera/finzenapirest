import { format } from '@formkit/tempo';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class BalanceService {
  constructor(private readonly prisma: PrismaService) {}

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
    const monthStart = format({ date: new Date(year, month - 1, 1), format: 'YYYY-MM-DD' });
    const monthEnd = format({ date: new Date(year, month, 0), format: 'YYYY-MM-DD' });
    return { monthStart, monthEnd };
  }

  private async getMonthData(userId: number, start: string, end: string) {
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
    start: string,
    end: string
  ) {
    return this.prisma.transaction.aggregate({
      _sum: { amount: true },
      where: {
        date: { gte: start, lte: end },
        category: {
          user_id: userId,
          type: type
        }
      }
    });
  }
}
