import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Controller('firebase')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}

  // Nuevos endpoints para Google
  @HttpCode(HttpStatus.OK)
  @Post('google/login')
  async googleLogin(@Body() googleData: { token: string }) {
    return this.firebaseService.loginWithGoogle(googleData);
  }

  // Opcional: endpoint para validar token de Google
  @Get('google/verify')
  //@UseGuards(FirebaseAuthGuard) // Asegúrate de crear este guard
  async verifyGoogleToken(@Req() req) {
    return {
      message: 'Token válido',
      user: req.user,
    };
  }

  
}
