import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { FirebaseService } from './firebase.service';

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
}
