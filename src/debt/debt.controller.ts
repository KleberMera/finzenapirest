import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DebtService } from './debt.service';
import { DebtDTO } from 'src/models/deb.interface';

@Controller('debt')
export class DebtController {
  constructor(private readonly debtService: DebtService) {}

  @Get('user/:userId')
  async getDebtByUserId(@Param('userId') userId: string) {
    return await this.debtService.getDebtByUserId(Number(userId));
  }

  @Post()
  async createDebt(@Body() debt: DebtDTO) {
    return await this.debtService.createDebt(debt);
  }
}
