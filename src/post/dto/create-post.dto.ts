import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: 'O título do post não pode estar vazio' })
  @IsString({ message: 'O título do post deve ser uma string' })
  title: string;

  @IsNotEmpty({ message: 'O conteúdo do post não pode estar vazio' })
  @IsString({ message: 'O conteúdo do post deve ser uma string' })
  content: string;

  @IsNotEmpty({ message: 'O ID do autor não pode estar vazio' })
  authorId: string;
}
