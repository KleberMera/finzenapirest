import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GraficService } from './grafic.service';

@Controller('grafic')
export class GraficController {
  constructor(private readonly graficService: GraficService) {}

  @Get('weekly-summary/:userId')
  async getWeeklySummary(@Param('userId') userId: string) {
    return this.graficService.getWeeklySummary(Number(userId));
  }

   @Post('monthly-summary/:userId')
  async getMonthlySummary(
    @Param('userId') userId: string,
    @Body('startMonth') startMonth: number,
    @Body('startYear') startYear: number,
  ) {
    return this.graficService.getMonthlySummary(
      Number(userId),
      Number(startMonth),
      Number(startYear),
    );
  }

  @Get('range/data/:userId')
  async getTransactionData(
    @Param('userId') userId: number,
    @Query('startMonth') startMonth: number,
    @Query('startYear') startYear: number,
    @Query('endMonth') endMonth?: number,
    @Query('endYear') endYear?: number,
  ) {
    return this.graficService.getTransactionData(
      Number(userId),
      Number(startMonth),
      Number(startYear),
      endMonth ? Number(endMonth) : undefined,
      endYear ? Number(endYear) : undefined,
    );
  }

 
}
