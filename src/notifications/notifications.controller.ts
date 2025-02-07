import { Body, Controller, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { User } from 'src/models/user.decorator';
import { UserDTO } from 'src/models/user.interface';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}


  @Post('subscribe')

  async subscribe(@Body('token') token: string, @User() user: UserDTO) {
    return this.notificationsService.saveUserToken(user.firebaseUid, token);
  }
}
