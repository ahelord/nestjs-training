import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<UserDto> {
    const user = await this.userService.get(id);
    return user;
  }

  @Get()
  async getUsers(): Promise<UserDto[]> {
    const users = await this.userService.getAll();
    return users;
  }

  @Post()
  async createUser(@Body() user: User): Promise<UserDto> {
    const userCreated = await this.userService.create(user);
    return userCreated;
  }

  @Patch(':id')
  async updateUser(@Param() id: number, @Body() user: User) {
    const createdUser = await this.userService.update(id, user);
    return createdUser;
  }

  @Delete(':id')
  async deleteUser(@Param() id: number) {
    await this.userService.delete(id);
    return true;
  }
}
