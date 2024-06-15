import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { AuthLoginDto, AuthResponseDto, AuthSignUpDto } from '../dtos';
import { AuthUser, Public } from '@/decorators';
import { AuthJwtRefreshGuard } from '@/guards';
import { IAuthPayload, ITokenResponse } from '@ransom/types';

@ApiTags('auth')
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() payload: AuthLoginDto): Promise<AuthResponseDto> {
    return this.authService.login(payload);
  }

  @Public()
  @Post('signup')
  async signup(@Body() payload: AuthSignUpDto): Promise<AuthResponseDto> {
    return this.authService.signup(payload);
  }

  @Public()
  @UseGuards(AuthJwtRefreshGuard)
  @Get('refresh')
  async refresh(
    @AuthUser() user: IAuthPayload,
  ): Promise<Omit<ITokenResponse, 'refreshToken'>> {
    const { accessToken } = await this.authService.generateTokens({
      uuid: user.uuid,
    });
    return { accessToken };
  }
}
