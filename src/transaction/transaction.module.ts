import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    providers: [TransactionService, PrismaService],
    controllers: [TransactionController],
   
})
export class TransactionModule {}
