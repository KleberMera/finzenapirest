import { Module } from '@nestjs/common';
import { RecurrentTransactionService } from './recurrent-transaction.service';
import { RecurrentTransactionController } from './recurrent-transaction.controller';
import { PrismaService } from 'src/config/prisma/prisma.service';

@Module({
  controllers: [RecurrentTransactionController],
  providers: [RecurrentTransactionService, PrismaService],
})
export class RecurrentTransactionModule {}
