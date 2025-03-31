import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionDTO } from 'src/models/trasaction.interface';
interface MonthlyExpenseRequest {
  userId: number;
  month: number;
  year: number;
}

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('user/:userId')
  async getTransactionByUserId(@Param('userId') userId: string) {
    return await this.transactionService.getTransactionByUserId(Number(userId));
  }

  @Get('user/name/:userId')
  async getTransactionByUserIdName(@Param('userId') userId: string) {
    return await this.transactionService.getTransactionByUserIdName(Number(userId));
  }

  @Post()
  async createTransaction(@Body() transaction: TransactionDTO) {
    return await this.transactionService.createTransaction(transaction);
  }

  @Delete('user/delete/:id')
  async deleteTransaction(@Param('id') id: string) {
    return await this.transactionService.deleteTransactionById(Number(id));
  }

  @Get('user/:userId/filtered')
  async getTransactionsWithFilters(
    @Param('userId') userId: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('categoryName') categoryName?: string,
    @Query('transactionName') transactionName?: string,
    @Query('type') type?: string,
    @Query('date') date?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('today') today?: boolean,
    @Query('all') all?: string,
  ) {
    return await this.transactionService.getTransactionsByUserIdWithFilters(
      Number(userId),
      {
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
        categoryName,
        transactionName,
        type,
        date,
        startDate,
        endDate,
        today,
        all: all === 'true', // Convertir string a boolean
      }
    );
  }


 

  @Post('user/total/month')
  async getTotalExpenseByUserAndMonth(
    @Body() request: MonthlyExpenseRequest
  ) {
    return await this.transactionService.getTotalExpenseByUserAndMonth(
      request.userId,
      request.month,
      request.year
    );
  }
}
