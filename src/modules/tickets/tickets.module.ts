import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';

import { PrismaModule } from 'src/config/prisma/prisma.module';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { S3Service } from 'src/config/s3/s3.service';
import { ConfigModule } from '@nestjs/config';
import { GenerativeAiService } from 'src/config/generative-ai/generative-ai.service';



@Module({
  
  controllers: [TicketsController],
  providers: [TicketsService, GenerativeAiService, S3Service,],
  imports: [
    ConfigModule,

    PrismaModule,
    MulterModule.register({
      storage: memoryStorage(), // Esto mantiene el archivo en memoria, no en disco
    }),

  ],
})
export class TicketsModule {}

