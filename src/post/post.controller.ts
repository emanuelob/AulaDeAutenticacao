import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CurrentUser } from 'src/auth/decorators/currentUser.decorator';
import { UserPayload } from 'src/auth/types/UserPayload';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto, @CurrentUser() currentUser: UserPayload) {
    if (createPostDto.authorId !== currentUser.sub) {
      throw new UnauthorizedException('Só é possível criar posts para si mesmo');
    }
    return this.postService.create(createPostDto);
  }

  @Get()
  async findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.postService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto, @CurrentUser() currentUser: UserPayload) {
    const post = await this.postService.findOne(id);
    if (post.authorId !== currentUser.sub) {
      throw new UnauthorizedException('Você só pode atualizar seus próprios posts');
    }
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @CurrentUser() currentUser: UserPayload) {
    const post = await this.postService.findOne(id);
    if (post.authorId !== currentUser.sub) {
      throw new UnauthorizedException('Você só pode deletar seus próprios posts');
    }
    return this.postService.remove(id);
  }
}