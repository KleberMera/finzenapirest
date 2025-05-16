import { Controller } from '@nestjs/common';
import { SendNotificationService } from './send-notification.service';

@Controller('send-notification')
export class SendNotificationController {
  constructor(private readonly sendNotificationService: SendNotificationService) {}
}
