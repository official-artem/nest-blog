import { IsString, IsOptional, IsEnum } from 'class-validator';
import PostStatus from '../post-status.enum';

class GetPostDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsEnum(PostStatus)
  @IsOptional()
  status?: string;
}

export default GetPostDto;
