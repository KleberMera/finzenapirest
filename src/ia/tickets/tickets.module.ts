import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { GenerativeAiService } from '../google/generative-ai/generative-ai.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import * as fs from 'fs';
@Module({
  controllers: [TicketsController],
  providers: [TicketsService, GenerativeAiService],
  imports: [
    PrismaModule,
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, callback) => {
          const userId = req.params.userId;
          const userFolder = path.join('./uploads', `${userId}_user`);

          if (!fs.existsSync(userFolder)) {
            fs.mkdirSync(userFolder, { recursive: true });
          }

          callback(null, userFolder);
        },
        filename: (req, file, callback) => {
          const fileName = `picture${uuidv4()}${path.extname(file.originalname)}`;
          callback(null, fileName);
        },
      }),
    }),
  ],
})
export class TicketsModule {}

