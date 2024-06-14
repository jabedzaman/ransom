import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { faker } from '@faker-js/faker';

export class AuthSignUpDto {
  @ApiProperty({
    description: 'Email of the user',
    example: faker.internet.email(),
  })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Password of the user',
    example: faker.internet.password({
      prefix: 'Aa1!',
      length: 10,
    }),
  })
  @IsString()
  password: string;
}
