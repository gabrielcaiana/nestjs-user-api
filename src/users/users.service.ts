import { Injectable, NotFoundException } from '@nestjs/common';
import prisma from '../db';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  async getUsers(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  async createUser(
    userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<User> {
    return await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
      },
    });
  }

  async getUser(id: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  async updateUser(
    id: string,
    userData: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>,
  ): Promise<User> {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return await prisma.user.update({
      where: { id },
      data: userData,
    });
  }

  async deleteUser(id: string): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  }
}
