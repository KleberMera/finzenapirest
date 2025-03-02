import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionDTO } from 'src/models/trasaction.interface';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('user/:userId')
  async getTransactionByUserId(@Param('userId') userId: string) {
    return await this.transactionService.getTransactionByUserId(Number(userId));
  }

  @Post()
  async createTransaction(@Body() transaction: TransactionDTO) {
    return await this.transactionService.createTransaction(transaction);
  }


  @Delete('user/delete/:id')
  async deleteTransaction(@Param('id') id: string) {
    return await this.transactionService.deleteTransactionById(Number(id));
  }
}
