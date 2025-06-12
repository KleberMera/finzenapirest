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
