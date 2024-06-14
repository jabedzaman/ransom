import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { AuthLoginDto, AuthResponseDto, AuthSignUpDto } from '../dtos';

@ApiTags('auth')
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() payload: AuthLoginDto): Promise<AuthResponseDto> {
    return this.authService.login(payload);
  }

  @Post('signup')
  async signup(@Body() payload: AuthSignUpDto): Promise<AuthResponseDto> {
    return this.authService.signup(payload);
  }
}
