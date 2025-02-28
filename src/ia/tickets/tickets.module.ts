import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { GenerativeAiService } from '../google/generative-ai/generative-ai.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
@Module({
  controllers: [TicketsController],
  providers: [TicketsService, GenerativeAiService],
  imports: [PrismaModule,
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads', // Carpeta donde se guardarán los archivos temporalmente
        filename: (req, file, callback) => {
          const filename = `${uuidv4()}${path.extname(file.originalname)}`;
          callback(null, filename);
        },
      }),
    }),

  ],
})
export class TicketsModule {}

