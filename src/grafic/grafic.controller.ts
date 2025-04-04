import { Controller, Get, Param, Query } from '@nestjs/common';
import { GraficService } from './grafic.service';

@Controller('grafic')
export class GraficController {
  constructor(private readonly graficService: GraficService) {}

  @Get('weekly-summary/:userId')
  async getWeeklySummary(@Param('userId') userId: string) {
    return this.graficService.getWeeklySummary(Number(userId));
  }

  @Get('month/:userId/:month/:year')
  async getMonthlyData(
    @Param('userId') userId: number,
    @Param('month') month: string,
    @Param('year') year: string,
  ) {
    return this.graficService.getMonthlyData(
      Number(userId),
      parseInt(month),
      parseInt(year),
    );
  }

  @Get('range/data/:userId')
  async getDataByMonthRange(
    @Param('userId') userId: number,
    @Query('startMonth') startMonth: string,
    @Query('startYear') startYear: string,
    @Query('endMonth') endMonth: string,
    @Query('endYear') endYear: string,
  ) {
    return this.graficService.getDataByMonthRange(
      Number(userId),
      parseInt(startMonth),
      parseInt(startYear),
      parseInt(endMonth),
      parseInt(endYear),
    );
  }
}
