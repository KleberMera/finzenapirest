import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MethodService } from './method.service';

@Controller('method')
export class MethodController {
  constructor(private readonly methodService: MethodService) {}

  
  @Get('debt/user/:userId')
  async getDebtByUserIdName(@Param('userId') userId: string) {
    return await this.methodService.getDebtByUserIdName(Number(userId));
  }


  @Post('strategy-plan/user/:userId')
  async createStrategyPlan(@Param('userId') userId: string, @Body() data: any) {
    return await this.methodService.createStrategyPlan(Number(userId), data);
  }

  @Get('strategy-plan/user/:userId')
  async getStrategyPlan(@Param('userId') userId: string) {
    return await this.methodService.getStrategyPlan(Number(userId));
  }

  @Delete('strategy-plan/user/:userId/:id')
  async deleteStrategyPlan(@Param('userId') userId: string, @Param('id') id: string) {
    return await this.methodService.deleteStrategyPlan(Number(id), Number(userId));
  }
}
