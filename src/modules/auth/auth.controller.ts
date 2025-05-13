import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/models/user.interface';



@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() user: UserDTO) {
    return this.authService.login(user);
  }

  @Post('sign-up')
  signUp(@Body() user: UserDTO) {
    return this.authService.signUp(user);
  }


  @Get('user/:id')
  async getUserById(@Param('id') id: string) {
    return await this.authService.getUserById(Number(id));
  }


  @Put('update-user/:id')
  async updateUserById(@Param('id') id: string, @Body() user: UserDTO) {
    return await this.authService.updateUserById(Number(id), user);
  }
}
