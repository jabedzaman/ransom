import { IAuthPayload, ITokenResponse } from '@ransom/types';
import { AuthLoginDto, AuthResponseDto, AuthSignUpDto } from '../dtos';

export type IAuthService = {
  login: (payload: AuthLoginDto) => Promise<AuthResponseDto>;
  signup: (payload: AuthSignUpDto) => Promise<AuthResponseDto>;
  generateTokens: (payload: IAuthPayload) => Promise<ITokenResponse>;
};
