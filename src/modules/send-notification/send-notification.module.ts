import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/config/prisma/prisma.module';

import { SendNotificationService } from './send-notification.service';
import { SendNotificationController } from './send-notification.controller';
import { WebPushService } from 'src/providers/web-push/web-push.service';

@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [SendNotificationController],
  providers: [SendNotificationService, WebPushService],
  exports: [SendNotificationService],
})
export class SendNotificationModule {}
