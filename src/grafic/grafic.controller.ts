import { Controller, Get, Param } from '@nestjs/common';
import { GraficService } from './grafic.service';

@Controller('grafic')
export class GraficController {
  constructor(private readonly graficService: GraficService) {}

  @Get('weekly-summary/:userId')
  async getWeeklySummary(@Param('userId') userId: string) {
    return this.graficService.getWeeklySummary(Number(userId));
  }
}
