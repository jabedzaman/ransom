import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { PrismaService } from '@/common';

@Module({
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
