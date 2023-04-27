import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import GetPostDto from './DTO/get-posts.dto';
import CreatePostDto from './DTO/create-post.dto';
import UpdatePostDto from './DTO/update-post.dto';

@Controller('posts')
export class PostsController {
  @Get()
  getAllosts(@Query() getPostsDto: GetPostDto) {
    return `This action returns all posts`;
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return `This action returns a post by ${id}`;
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return createPostDto;
  }

  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return 'This action updates a post';
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return 'This action removes a post';
  }
}
