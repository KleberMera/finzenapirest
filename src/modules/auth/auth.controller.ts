import {
  BadRequestException,
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

  @UseGuards(TokenGuard)
  @Get('user-role/:id')
  async getUserRoleById(@Param('id') id: string) {
    return await this.authService.getUserRoleById(Number(id));
  }

  /**
   * Verifica si la contraseña proporcionada coincide con la contraseña actual del usuario
   * @param userId - ID del usuario
   * @param body - Objeto que contiene la contraseña actual
   * @returns Objeto con indicador de si la contraseña es correcta
   */
  @UseGuards(TokenGuard)
  @Post('verify-password/:userId')
  async verifyCurrentPassword(
    @Param('userId') userId: string,
    @Body('password') password: string
  ) {
    const isMatch = await this.authService.verifyCurrentPassword(
      Number(userId),
      password
    );
    
    return {
      success: isMatch,
      message: isMatch 
        ? 'La contraseña es correcta' 
        : 'La contraseña es incorrecta'
    };
  }

  /**
   * Restablece la contraseña de un usuario
   * @param userId - ID del usuario
   * @param body - Objeto que contiene la nueva contraseña
   * @returns Objeto con el resultado de la operación
   */
  @UseGuards(TokenGuard)
  @Post('reset-password/:userId')
  async resetPassword(
    @Param('userId') userId: string,
    @Body('newPassword') newPassword: string
  ) {
    if (!newPassword) {
      throw new BadRequestException('La nueva contraseña es requerida');
    }

    return await this.authService.resetPassword(Number(userId), newPassword);
  }
}
