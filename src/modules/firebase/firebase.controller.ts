import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';

import { FirebaseService } from './firebase.service';
import { Public } from 'src/guards/token.guard';
@Public()
@Controller('firebase')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}
  @HttpCode(HttpStatus.OK)
  @Post('google/login')
  async loginWithGoogle(@Body('idToken') idToken: string) {
    return this.firebaseService.loginWithGoogle(idToken);
  }

  @Post('signup')
  async signUpWithGoogle(@Body('idToken') idToken: string) {
    return this.firebaseService.signUpWithGoogle(idToken);
  }

  @Post('verify-email')
  async requestPasswordReset(@Body('email') email: string) {
    return this.firebaseService.requestPasswordReset(email);
  }

  @Post('reset-password')
  async resetPassword(@Body('code') code: string, @Body('newPassword') newPassword: string) {
    return this.firebaseService.resetPassword(code, newPassword);
  }

  @Post('verify-code')
  async verifyCode(@Body('code') code: string) {
    return this.firebaseService.verifyCode(code);
  }

  
  @Post('link-google')
  async linkWithGoogle(@Body('userId') userId: number, @Body('idToken') idToken: string) {
   // const userId = req.user.id; // Asumiendo que el ID del usuario está en req.user.id
    return this.firebaseService.linkWithGoogle(
    Number(userId),
    idToken
    );
  }
}
