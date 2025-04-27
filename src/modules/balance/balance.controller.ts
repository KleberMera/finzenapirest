import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { BalanceService } from './balance.service';

@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  //@Get(':userId')
  @Get(':userId/:currentMonth/:currentYear/:previousMonth/:previousYear')
  async getBalance(
    @Param('userId') userId: string,
    @Param('currentMonth') currentMonth: number,
    @Param('currentYear') currentYear: number,
    @Param('previousMonth') previousMonth: number,
    @Param('previousYear') previousYear: number
  ) {
    try {
      const result = await this.balanceService.getMonthlyBalance(
        parseInt(userId),
        currentMonth,
        currentYear,
        previousMonth,
        previousYear
      );

      return {
        message: 'Balance obtenido correctamente',
        data: result,
        status: HttpStatus.OK
      };
    } catch (error) {
      throw new HttpException({
         
        message: error.message || 'Error al obtener el balance',
        data: null,
        status: HttpStatus.INTERNAL_SERVER_ERROR
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
