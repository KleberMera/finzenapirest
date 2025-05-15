import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { WebPushService } from 'src/providers/web-push/web-push.service';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService, PrismaService, WebPushService],
})
export class NotificationsModule {}
