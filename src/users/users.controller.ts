import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService, type User } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  listAll(): any[] {
    return this.usersService.getUsers();
  }

  @Post()
  create(@Body() user: User): User {
    return this.usersService.createUser(user);
  }

  @Get(':id')
  getByEmail(@Param('id') id: number): User | undefined {
    return this.usersService.getUser(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: User): User {
    return this.usersService.updateUser(Number(id), user);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.usersService.deleteUser(Number(id));
  }
}
