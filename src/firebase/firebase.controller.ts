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
}
