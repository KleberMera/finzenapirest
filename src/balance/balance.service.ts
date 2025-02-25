import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BalanceService {
    private prisma = new PrismaClient();

    async getMonthlyBalance(userId: number) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new NotFoundException('User not found');
    
        const now = new Date();
        const { currentMonthStart, currentMonthEnd, previousMonthStart, previousMonthEnd } = this.getMonthRanges(now);
    
        const [currentData, previousData] = await Promise.all([
          this.getMonthData(userId, currentMonthStart, currentMonthEnd),
          this.getMonthData(userId, previousMonthStart, previousMonthEnd)
        ]);
    
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = {
          currentMonth: this.formatMonthData(currentData, now)
        };
    
        // Verificar si hay datos en el mes anterior
        if (previousData.totalIncome > 0 || previousData.totalExpenses > 0) {
          const prevMonthDate = new Date(now);
          prevMonthDate.setMonth(now.getMonth() - 1);
          
          response.previousMonth = this.formatMonthData(previousData, prevMonthDate);
          response.comparison = this.calculateComparison(currentData, previousData);
        }
    
        return response;
    
        
      }
    
      private getMonthRanges(date: Date) {
        const currentMonthStart = new Date(date.getFullYear(), date.getMonth(), 1);
        const currentMonthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        
        const previousMonthStart = new Date(date.getFullYear(), date.getMonth() - 1, 1);
        const previousMonthEnd = new Date(date.getFullYear(), date.getMonth(), 0);
    
        return {
          currentMonthStart,
          currentMonthEnd,
          previousMonthStart,
          previousMonthEnd
        };
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
    
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      private formatMonthData(data: any, date: Date) {
        return {
          ...data,
          balance: data.totalIncome - data.totalExpenses,
          currency: 'USD',
          month: date.getMonth() + 1,
          monthName: date.toLocaleString('default', { month: 'long' }),
          year: date.getFullYear()
        };
      }
    
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      private calculateComparison(current: any, previous: any) {
        const incomeChange = this.calculatePercentageChange(current.totalIncome, previous.totalIncome);
        const expensesChange = this.calculatePercentageChange(current.totalExpenses, previous.totalExpenses);
        const balanceChange = this.calculatePercentageChange(
          current.totalIncome - current.totalExpenses,
          previous.totalIncome - previous.totalExpenses
        );
    
        return {
          incomePercentageChange: incomeChange,
          expensesPercentageChange: expensesChange,
          balancePercentageChange: balanceChange
        };
      }
    
      private calculatePercentageChange(current: number, previous: number) {
        if (previous === 0) return current === 0 ? 0 : 100;
        return ((current - previous) / previous) * 100;
      }


  //monthName: now.toLocaleString('default', { month: 'long' }),
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
