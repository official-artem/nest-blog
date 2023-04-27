import { IsString, IsEnum } from 'class-validator';
import PostStatus from '../post-status.enum';
class CreatePostDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly body: string;

  @IsEnum(PostStatus)
  readonly status: PostStatus;
}

export default CreatePostDto;
