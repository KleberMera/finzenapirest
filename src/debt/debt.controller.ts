import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DebtService } from './debt.service';
import { DebtDTO, UpdateDebtAmortizationsDto, UpdateStatusDto } from 'src/models/deb.interface';

@Controller('debt')
export class DebtController {
  constructor(private readonly debtService: DebtService) {}

  @Get('user/:userId')
  async getDebtByUserId(@Param('userId') userId: string) {
    return await this.debtService.getDebtByUserId(Number(userId));
  }

  @Get('user/:userId/debt')
  async getDebtByUserIdDebt(@Param('userId') userId: string) {
    return await this.debtService.getDebtByUserIdDebt(Number(userId));
  }

  @Get('amortizations/:debtId')
  async getAmortizationsByDebtId(
    @Param('debtId', ParseIntPipe) debtId: number,
  ) {
    return await this.debtService.getAmortizationsByDebtId(debtId);
  }

  @Post()
  async createDebt(@Body() debt: DebtDTO) {
    return await this.debtService.createDebt(debt);
  }

  @Put('update-status/:debtId')
  async updateStatus(
    @Param('debtId', ParseIntPipe) debtId: number,
    @Body() updateDto: UpdateStatusDto,
  ) {
    return await this.debtService.updateStatus(debtId, updateDto);
  }

  @Put('update-amortizations')
  async updateDebtAmortizations(@Body() updateDto: UpdateDebtAmortizationsDto) {
    return await this.debtService.updateDebtAmortizations(updateDto);
  }

  //Listar solo el nombre de la deuda con su id, por el id de usuario
  @Get('user/:userId/name')
  async getDebtByUserIdName(@Param('userId') userId: string) {
    return await this.debtService.getDebtByUserIdName(Number(userId));
  }

  //Listar por id de deuda sus deuda con su amortizaciones
  @Get('user/amortizations/:id')
  async getDebtById(@Param('id', ParseIntPipe) id: number) {
    return await this.debtService.getDebtById(Number(id));
  }

  //Borrar deuda y amortizaciones por id
  @Delete('delete/:id')
  async deleteDebt(@Param('id', ParseIntPipe) id: number) {
    return await this.debtService.deleteDebt(id);
  }
}
