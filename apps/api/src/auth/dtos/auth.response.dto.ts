import { UserResponseDto } from '@/modules/users/dtos';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

export class AuthResponseDto {
  accessToken: string;
  refreshToken: string;

  @ApiProperty({
    description: 'User information',
  })
  @Type(() => UserResponseDto)
  @ValidateNested()
  user: UserResponseDto;
}
