import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '@/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UsersService } from '@/modules/users/services/users.service';
import { ArgonService } from '@/common/services/security/argon.service';

@Module({
  imports: [
    PassportModule.register({ session: false }),
    JwtModule.register({}),
  ],
  providers: [AuthService, UsersService, PrismaService, ArgonService],
  controllers: [AuthController],
})
export class AuthModule {}
