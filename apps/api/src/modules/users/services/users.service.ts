import { Injectable } from '@nestjs/common';
import { $Enums } from '@prisma/client';
import { PrismaService } from '@/common';
import { UserResponseDto } from '../dtos';
import { IUserService } from '../types';

@Injectable()
export class UsersService implements IUserService {
  constructor(private readonly prismaService: PrismaService) {}

  createUser: (
    email: string,
    password_hash: string,
    strategy: $Enums.Strategy,
  ) => Promise<UserResponseDto> = async (email, password_hash, strategy) => {
    const user = await this.prismaService.user.create({
      data: {
        email,
        password_hash,
        strategy,
      },
    });
    delete user.password_hash;
    return user;
  };

  findUserByEmail: (email: string) => Promise<UserResponseDto> = async (
    email,
  ) => {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  };

  findUserByUuid: (uuid: string) => Promise<UserResponseDto> = async (uuid) => {
    const user = await this.prismaService.user.findUnique({
      where: {
        uuid,
      },
    });
    return user;
  };
}
