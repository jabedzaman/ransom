import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';
import { AuthUser } from '@/decorators';
import { IAuthPayload } from '@ransom/types';
import { UserResponseDto } from '../dtos';

@ApiTags('users')
@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async getMe(@AuthUser() user: IAuthPayload): Promise<UserResponseDto> {
    return this.usersService.findUserByUuid(user.uuid).then((user) => {
      delete user.password_hash;
      return user;
    });
  }
}
