import { Injectable } from '@nestjs/common';
import { Body, Param, Query } from '@nestjs/common';
import GetPostDto from './DTO/get-posts.dto';
import CreatePostDto from './DTO/create-post.dto';
import UpdatePostDto from './DTO/update-post.dto';

@Injectable()
export class PostsService {
  getAllPosts(@Query() getPostsDto: GetPostDto) {
    return `This action returns all posts`;
  }

  getPostById(@Param('id') id: string) {
    return `This action returns a post by ${id}`;
  }

  createPost(@Body() createPostDto: CreatePostDto) {
    return createPostDto;
  }

  updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return 'This action updates a post';
  }

  deletePost(@Param('id') id: string) {
    return 'This action removes a post';
  }
}
