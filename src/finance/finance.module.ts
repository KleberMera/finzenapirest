import { Module } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { FinanceController } from './finance.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenerativeAiService } from 'src/ia/google/generative-ai/generative-ai.service';

@Module({
  controllers: [FinanceController],
  providers: [FinanceService, PrismaService, GenerativeAiService],
})
export class FinanceModule {}
