import { Controller, Delete, Body, Param, Post, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async addUser(@Body('name') name: string): Promise<User> {
    return this.appService.createUser(name);
  }

  @Delete(':id')
  removeUser(@Param('id') userId: string): Promise<User> {
    return this.appService.deleteUser(+userId);
  }

  @Get(':id')
  getUser(@Param('id') userId: string): Promise<User> {
    return this.appService.getOneById(+userId);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.appService.getAll();
  }
}
