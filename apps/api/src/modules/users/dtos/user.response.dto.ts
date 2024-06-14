import { $Enums, User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserResponseDto implements User {
  email: string;
  name: string;
  strategy: $Enums.Strategy;
  uuid: string;

  @Exclude()
  password_hash: string;
}
