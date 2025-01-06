import { ApiProperty } from '@nestjs/swagger';

export class createUserDto {
  @ApiProperty({ example: 'email@gmail.com', description: 'Почта користувача' })
  readonly email: string;
  @ApiProperty({ example: 'qwerty1234', description: 'Пароль користувача' })
  readonly password: string;
}
