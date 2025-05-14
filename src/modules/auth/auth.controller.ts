import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/models/user.interface';
import { Public, TokenGuard } from 'src/guards/token.guard';



@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  login(@Body() user: UserDTO) {
    return this.authService.login(user);
  }

  @Public()
  @Post('sign-up')
  signUp(@Body() user: UserDTO) {
    return this.authService.signUp(user);
  }


  @UseGuards(TokenGuard)
  @Get('user/:id')
  async getUserById(@Param('id') id: string) {
    return await this.authService.getUserById(Number(id));
  }


  @UseGuards(TokenGuard)
  @Put('update-user/:id')
  async updateUserById(@Param('id') id: string, @Body() user: UserDTO) {
    return await this.authService.updateUserById(Number(id), user);
  }
}
