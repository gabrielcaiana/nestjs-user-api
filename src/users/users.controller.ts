import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async listAll(): Promise<User[]> {
    return await this.usersService.getUsers();
  }

  @Post()
  async create(
    @Body() userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<User> {
    return await this.usersService.createUser(userData);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<User | null> {
    return await this.usersService.getUser(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() userData: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>,
  ): Promise<User> {
    return await this.usersService.updateUser(id, userData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.usersService.deleteUser(id);
  }
}
