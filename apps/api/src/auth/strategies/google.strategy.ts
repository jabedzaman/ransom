import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '@/common';

@Injectable()
export class GoogleOauthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {
    super({
      clientID: configService.get<string>('auth.oauth.google.id'),
      clientSecret: configService.get<string>('auth.oauth.google.secret'),
      callbackURL: configService.get<string>('auth.oauth.google.redirectUrl'),
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
  ) {
    const {} = profile;
    // TODO: create or find user
    return profile;
  }
}
