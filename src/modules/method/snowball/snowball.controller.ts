import { Controller, Get, Param } from '@nestjs/common';
import { SnowballService } from './snowball.service';

@Controller('snowball')
export class SnowballController {
  constructor(private readonly snowballService: SnowballService) {}


  @Get('debt/user/:userId')
  async getDebtByUserIdName(@Param('userId') userId: string) {
    return await this.snowballService.getDebtByUserIdName(Number(userId));
  }
}
