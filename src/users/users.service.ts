import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
  name: string;
  email: string;
  id: number;
}

const USER_DATA: User[] = [];

@Injectable()
export class UsersService {
  getUsers(): User[] {
    return USER_DATA;
  }

  createUser(user: User): User {
    const newUser = { ...user, id: USER_DATA.length + 1 };
    USER_DATA.push(newUser);
    return newUser;
  }

  getUser(id: number): User | undefined {
    return USER_DATA.find((user) => user.id === id);
  }

  updateUser(id: number, user: User): User {
    const index = USER_DATA.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    USER_DATA[index] = {
      ...USER_DATA[index],
      id: user.id,
      name: user.name,
      email: user.email,
    };
    return USER_DATA[index];
  }

  deleteUser(id: number): void {
    const index = USER_DATA.findIndex((user) => user.id === id);
    if (index !== -1) {
      USER_DATA.splice(index, 1);
    }
  }
}
