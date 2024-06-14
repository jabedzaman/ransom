import type { Strategy } from '@prisma/client';
import { UserResponseDto } from '../dtos';

export type IUserService = {
  createUser: (
    email: string,
    password_hash: string | undefined,
    strategy: Strategy,
  ) => Promise<UserResponseDto>;
  findUserByEmail: (email: string) => Promise<UserResponseDto | null>;
  findUserByUuid: (uuid: string) => Promise<UserResponseDto | null>;
};
