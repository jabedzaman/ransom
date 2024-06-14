import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IAuthPayload } from '../types';
import { PrismaService } from '@/common';

@Injectable()
export class AuthJwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('auth.refreshToken.secret'),
    });
  }

  async validate(payload: IAuthPayload) {
    const user = await this.prismaService.user.findUnique({
      where: {
        uuid: payload.uuid,
      },
    });
    if (!user) {
      return null;
    }
    return payload;
  }
}
