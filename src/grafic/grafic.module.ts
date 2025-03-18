import { Module } from '@nestjs/common';
import { GraficService } from './grafic.service';
import { GraficController } from './grafic.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [GraficController],
  providers: [GraficService, PrismaService],
})
export class GraficModule {}
