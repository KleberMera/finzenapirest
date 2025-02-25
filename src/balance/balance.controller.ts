import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { BalanceService } from './balance.service';

@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get(':userId')
  async getBalance(@Param('userId') userId: string) {
    try {
      const result = await this.balanceService.getMonthlyBalance(parseInt(userId));
      
      return {
        message: 'Balance retrieved successfully',
        data: result,
        status: HttpStatus.OK
      };
      
    } catch (error) {
      throw new HttpException({
        message: error.message || 'Error retrieving balance',
        data: null,
        status: HttpStatus.INTERNAL_SERVER_ERROR
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
