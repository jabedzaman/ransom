import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { PrismaService } from '@/common';
import { UsersController } from './controllers/users.controller';

@Module({
  providers: [UsersService, PrismaService],
  controllers: [UsersController],
})
export class UsersModule {}
