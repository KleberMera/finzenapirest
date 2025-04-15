import { Body, Controller, Get, Param } from '@nestjs/common';
import { FinanceService } from './finance.service';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Get('summary/:userId')
  async getFinancialSummary(
    @Param('userId') userId: string,
    @Body('month') month: number,
    @Body('year') year: number,
  ) {
    return this.financeService.getFinancialSummary(
      Number(userId),
      Number(month),
      Number(year),
    );
  }


  @Get('summary/ai/:userId')
  async getFinancialSummaryAI(
    @Param('userId') userId: string,
    @Body('month') month: number,
    @Body('year') year: number,
  ) {
    return this.financeService.getFinancialSummaryAI(
      Number(userId),
      Number(month),
      Number(year),
    );
  }
}
