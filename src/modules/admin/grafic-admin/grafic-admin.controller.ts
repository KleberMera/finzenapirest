import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { apiResponse, GraficAdminService } from './grafic-admin.service';
interface CategoryExpenseDistribution {
  categoryId: number;
  categoryName: string;
  icon: string;
  totalAmount: number;
  transactionCount: number;
  percentage: number;
  userCount?: number; // Para admin: cantidad de usuarios que usaron esta categoría
}

interface TrendData {
  period: string; // "2024-01" formato
  categoryId: number;
  categoryName: string;
  icon: string;
  totalAmount: number;
  transactionCount: number;
  userCount?: number; // Para admin: cantidad de usuarios que usaron esta categoría en este período
}

@Controller('grafic-admin')
export class GraficAdminController {
  constructor(private readonly graficAdminService: GraficAdminService) {}



  @Get('expense-distribution/:month/:year')
  async getExpenseDistributionByMonth(
      @Param('month', ParseIntPipe) month: number,
      @Param('year', ParseIntPipe) year: number
  ): Promise<apiResponse<CategoryExpenseDistribution[]>> {
      return this.graficAdminService.getExpenseDistributionByMonth(month, year);
  }

  @Get('expense-distribution-trend/:startMonth/:startYear/:endMonth/:endYear')
  async getExpenseDistributionTrend(
      @Param('startMonth', ParseIntPipe) startMonth: number,
      @Param('startYear', ParseIntPipe) startYear: number,
      @Param('endMonth', ParseIntPipe) endMonth: number,
      @Param('endYear', ParseIntPipe) endYear: number
  ): Promise<apiResponse<{ trendData: TrendData[]; summary: CategoryExpenseDistribution[] }>> {
      return this.graficAdminService.getExpenseDistributionTrend(startMonth, startYear, endMonth, endYear);
  }
}
