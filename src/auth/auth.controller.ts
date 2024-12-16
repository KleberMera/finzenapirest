import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

export interface UserDTO {
  rol_id: number;
  name: string;
  last_name: string;
  username: string;
  user: string;
  email: string;
  password: string;
  phone: string;
  status: boolean;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() user: UserDTO) {
    return this.authService.login(user);
  }

  @Post('sign-up')
  signUp(@Body() user: UserDTO) {
    return this.authService.signUp(user);
  }

  @Get('user')
  getUser() {
    return this.authService.getUser();
  }

  @Get('user/:id')
  async getUserById(@Param('id') id: string) {
    return await this.authService.getUserById(Number(id));
  }
}
