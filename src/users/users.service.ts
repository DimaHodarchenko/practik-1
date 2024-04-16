import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  public users: User[] = [
    {"id": 1, "name": "Dima", "age": 12, "email": "Dima@example.com", "subscription": true},
    {"id": 2, "name": "Ivan", "age": 52, "email": "Ivan@example.com", "subscription": false},
    {"id": 3, "name": "Mark", "age": 35, "email": "Mark@example.com", "subscription": true},
    {"id": 4, "name": "Timur", "age": 26, "email": "Timur@example.com", "subscription": false}
  ]

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
        throw new NotFoundException(`Користувач з таким id: ${id} немає!`);
    }
    return user;    
  }
}
