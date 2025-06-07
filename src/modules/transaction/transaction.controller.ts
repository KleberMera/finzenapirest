import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
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
    return await this.transactionService.getTransactionByUserIdName(
      Number(userId),
    );
  }

  @Post()
  async createTransaction(@Body() transaction: TransactionDTO) {
    return await this.transactionService.createTransaction(transaction);
  }

  @Put(':id')
  async updateTransaction(@Param('id') id: number, @Body() transaction: TransactionDTO) {
    return await this.transactionService.updateTransaction(Number(id), transaction);
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
      },
    );
  }

  @Post('user/total/month')
  async getTotalExpenseByUserAndMonth(@Body() request: MonthlyExpenseRequest) {
    return await this.transactionService.getTotalExpenseByUserAndMonth(
      request.userId,
      request.month,
      request.year,
    );
  }

  @Post('user/total/income/month')
  async getTotalIncomeByUserAndMonth(@Body() request: MonthlyExpenseRequest) {
    return await this.transactionService.getTotalIncomeByUserAndMonth(
      request.userId,
      request.month,
      request.year,
    );
  }

  @Get('category/:categoryId')
  async getTransactionByCategoryId(@Param('categoryId') categoryId: string) {
    return await this.transactionService.getTransactionByCategoryId(
      Number(categoryId),
    );
  }


  @Get('statistics')
  async getTransactionStatistics(
    @Query('month') month: number,
    @Query('year') year: number,
    @Query('endMonth') endMonth?: number,
    @Query('endYear') endYear?: number
  ) {
    // Validar que se proporcione mes y año
    if (!month || !year) {
      throw new Error('Debe proporcionar al menos el mes y el año');
    }

    // Convertir parámetros a números
    const monthNum = month;
    const yearNum = year;
    
    // Convertir parámetros opcionales
    let endMonthNum: number | undefined;
    let endYearNum: number | undefined;
    
    if (endMonth && endYear) {
      endMonthNum = endMonth;
      endYearNum = endYear;
    } else if (endMonth || endYear) {
      throw new Error('Debe proporcionar tanto el mes final como el año final');
    }

    return await this.transactionService.getTransactionStatistics(
      monthNum,
      yearNum,
      endMonthNum,
      endYearNum
    );
  }
}
