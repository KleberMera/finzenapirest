import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { DebtService } from './debt.service';
import { DebtDTO, UpdateDebtAmortizationsDto, UpdateStatusDto } from 'src/models/deb.interface';

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

  @Put('update-status')
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
}
