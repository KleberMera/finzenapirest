import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO2 } from 'src/models/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: UserDTO2) {
    return this.userService.createUser(user);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number, @Body('status') status: boolean) {
    return this.userService.deleteUser(Number(id), Boolean(status));
  }

  @Delete(':id/permanent')
  async permanentDeleteUser(@Param('id') id: number) {
    return this.userService.permanentDeleteUser(Number(id));
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() user: UserDTO2) {
    return this.userService.updateUser(id, user);
  }
}
