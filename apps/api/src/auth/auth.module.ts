import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '@/common';
import { AuthJwtAccessGuard } from '@/guards';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UsersService } from '@/modules/users/services/users.service';
import { ArgonService } from '@/common/services/security/argon.service';
import { AuthJwtAccessStrategy } from './strategies/jwt.access.strategy';
import { AuthJwtRefreshStrategy } from './strategies/jwt.refresh.strategy';

@Module({
  imports: [
    PassportModule.register({ session: false }),
    JwtModule.register({}),
  ],
  providers: [
    AuthService,
    UsersService,
    PrismaService,
    ArgonService,
    AuthJwtAccessStrategy,
    AuthJwtRefreshStrategy,
    {
      provide: APP_GUARD,
      useClass: AuthJwtAccessGuard,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
