import { IsEmail, IsOptional, IsString, MinLength, IsNotEmpty } from 'class-validator';
import { UserEntity } from '../entities/user.entity';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto extends PartialType(UserEntity) {
  @IsEmail({}, { message: 'O email fornecido é inválido.' })
  @IsNotEmpty({ message: 'O campo email não pode estar vazio.' })
  email: string;

  @IsString({ message: 'A senha deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo senha não pode estar vazio.' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  senha: string;

  @IsOptional()
  @IsString({ message: 'O nome deve ser uma string.' })
  name?: string;
}
