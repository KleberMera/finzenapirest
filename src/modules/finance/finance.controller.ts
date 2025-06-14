import { Body, Controller, Param, Post } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { Public } from 'src/guards/token.guard';

@Public()
@Controller('finance')

export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Post('summary/:userId')
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

  @Post('summary/range/:userId')
  async getFinancialSummaryRange(
    @Param('userId') userId: string,
    @Body('startMonth') startMonth: number,
    @Body('startYear') startYear: number,
    @Body('endMonth') endMonth?: number,
    @Body('endYear') endYear?: number,
  ) {
    return this.financeService.getFinancialSummaryRange(
      Number(userId),
      Number(startMonth),
      Number(startYear),
      endMonth ? Number(endMonth) : undefined,
      endYear ? Number(endYear) : undefined,
    );
  }

  @Post('summary/ai/:userId')
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
