import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HashPasswordService } from './services/HashPassword.service';

@Module({
  providers: [UserService, HashPasswordService],
  controllers: [UserController]
})
export class UserModule { }
