import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { GenerativeAiService } from '../google/generative-ai/generative-ai.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { S3Service } from 'src/s3/s3.service';
import { ConfigModule } from '@nestjs/config';
;



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

