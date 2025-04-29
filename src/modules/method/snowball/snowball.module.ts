import { Module } from '@nestjs/common';
import { SnowballService } from './snowball.service';
import { SnowballController } from './snowball.controller';
import { PrismaService } from 'src/config/prisma/prisma.service';

@Module({
  controllers: [SnowballController],
  providers: [SnowballService, PrismaService],
})
export class SnowballModule {}
