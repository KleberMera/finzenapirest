import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SnowballService } from './snowball.service';

@Controller('snowball')
export class SnowballController {
  constructor(private readonly snowballService: SnowballService) {}


  @Get('debt/user/:userId')
  async getDebtByUserIdName(@Param('userId') userId: string) {
    return await this.snowballService.getDebtByUserIdName(Number(userId));
  }


  @Post('strategy-plan/user/:userId')
  async createStrategyPlan(@Param('userId') userId: string, @Body() data: any) {
    return await this.snowballService.createStrategyPlan(Number(userId), data);
  }

  @Get('strategy-plan/user/:userId')
  async getStrategyPlan(@Param('userId') userId: string) {
    return await this.snowballService.getStrategyPlan(Number(userId));
  }

  @Delete('strategy-plan/user/:userId/:id')
  async deleteStrategyPlan(@Param('userId') userId: string, @Param('id') id: string) {
    return await this.snowballService.deleteStrategyPlan(Number(id), Number(userId));
  }
}
