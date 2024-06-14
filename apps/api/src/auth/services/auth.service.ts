import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { IAuthService } from '../types';
import { UsersService } from '@/modules/users/services/users.service';
import { AuthLoginDto, AuthResponseDto, AuthSignUpDto } from '../dtos';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { IAuthPayload, ITokenResponse } from '@ransom/types';
import { ArgonService } from '@/common/services/security/argon.service';

@Injectable()
export class AuthService implements IAuthService {
  private readonly accessTokenSecret: string;
  private readonly refreshTokenSecret: string;
  private readonly accessTokenExp: string;
  private readonly refreshTokenExp: string;
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly argonService: ArgonService,
  ) {
    this.accessTokenSecret = this.configService.get<string>(
      'auth.accessToken.secret',
    );
    this.refreshTokenSecret = this.configService.get<string>(
      'auth.refreshToken.secret',
    );
    this.accessTokenExp = this.configService.get<string>(
      'auth.accessToken.expirationTime',
    );
    this.refreshTokenExp = this.configService.get<string>(
      'auth.refreshToken.expirationTime',
    );
  }

  login: (payload: AuthLoginDto) => Promise<AuthResponseDto> = async (
    payload,
  ) => {
    const user = await this.usersService.findUserByEmail(payload.email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const isValidPassword = await this.argonService.match(
      user.password_hash,
      payload.password,
    );
    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid password');
    }
    const { accessToken, refreshToken } = await this.generateTokens({
      uuid: user.uuid,
    });
    return { accessToken, refreshToken, user };
  };

  signup: (payload: AuthSignUpDto) => Promise<AuthResponseDto> = async (
    payload,
  ) => {
    const userExists = await this.usersService.findUserByEmail(payload.email);
    if (userExists) {
      throw new ConflictException('User already exists');
    }
    const hashedPassword = await this.argonService.createHash(payload.password);
    const user = await this.usersService.createUser(
      payload.email,
      hashedPassword,
      'LOCAL',
    );
    const { accessToken, refreshToken } = await this.generateTokens({
      uuid: user.uuid,
    });
    return { accessToken, refreshToken, user };
  };

  generateTokens: (payload: IAuthPayload) => Promise<ITokenResponse> = async (
    payload,
  ) => {
    const accessToken = this.jwtService.sign(payload, {
      secret: this.accessTokenSecret,
      expiresIn: this.accessTokenExp,
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.refreshTokenSecret,
      expiresIn: this.refreshTokenExp,
    });
    return { accessToken, refreshToken };
  };
}
