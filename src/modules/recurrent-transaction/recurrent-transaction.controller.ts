import { Body, Controller, Delete, Get, Param, Patch, Post, Request } from '@nestjs/common';
import { RecurrentTransactionService } from './recurrent-transaction.service';
import { CreateRecurrentTransactionDto, UpdateRecurrentTransactionDto } from 'src/models/recurrent/create-recurrent-transaction.dto';

@Controller('recurrent-transaction')
export class RecurrentTransactionController {
  constructor(private readonly recurrentTransactionService: RecurrentTransactionService) {}

  @Post()
 async create(@Body() createRecurrentTransactionDto: CreateRecurrentTransactionDto, @Request() req: any) {
    return await this.recurrentTransactionService.create(createRecurrentTransactionDto, req.user.id);
  }

  @Post(':transactionId/:userId')
  createFromExisting(
    @Param('transactionId') transactionId: string,
    @Body() recurrenceConfig: Omit<CreateRecurrentTransactionDto, 'transactionData'>,
    @Param('userId') userId: number,
  ) {
    return this.recurrentTransactionService.createFromExistingTransaction(
      parseInt(transactionId),
      recurrenceConfig,
     Number(userId),
    );
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    return this.recurrentTransactionService.findAllByUser(Number(userId));
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.recurrentTransactionService.findOne(parseInt(id), req.user.id);
  }

  @Get(':id/history')
  getGeneratedTransactions(@Param('id') id: string, @Request() req) {
    return this.recurrentTransactionService.getGeneratedTransactions(parseInt(id), req.user.id);
  }

  @Patch(':id/:userId')
  update(
    @Param('id') id: string, 
    @Body() updateRecurrentTransactionDto: UpdateRecurrentTransactionDto,
    @Param('userId') userId: number,
  ) {
    return this.recurrentTransactionService.update(
      parseInt(id),
      updateRecurrentTransactionDto,
      Number(userId)
    );
  }

  @Patch(':id/active')
  toggleActive(
    @Param('id') id: string,
    @Body('isActive') isActive: boolean,
    @Request() req
  ) {
    return this.recurrentTransactionService.toggleActive(parseInt(id), isActive, req.user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body('userId') userId: number) {
    return this.recurrentTransactionService.remove(Number(id), Number(userId));
  }




}
