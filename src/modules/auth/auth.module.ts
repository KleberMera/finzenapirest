import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { TokenGuard } from 'src/guards/token.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '5h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, TokenGuard,
   {
    provide: APP_GUARD,
    useClass: TokenGuard,
   }
  ],
})
export class AuthModule {}
