import {
  Body,
  Controller,
  NotFoundException,
  NotImplementedException,
  Post,
} from '@nestjs/common';
import { ZodValidationPipe } from 'src/commom/pipes/zod-validation.pipe';
import { CreateArticleService } from '../services/create-article.service';
import {
  CreateArticleDto,
  CreateArticleSchema,
} from './dto/create-article.dto';

@Controller('articles')
export class CreateArticleController {
  constructor(private createArticleService: CreateArticleService) {}

  @Post()
  async execute(
    @Body(new ZodValidationPipe(CreateArticleSchema)) data: CreateArticleDto,
  ) {
    const response = await this.createArticleService.execute(data);

    if (response.status === 'SUCCESS') {
      return response.data;
    } else {
      switch (response.error) {
        case 'Article not found':
          throw new NotFoundException(response.error);
        default:
          throw new NotImplementedException();
      }
    }
  }
}
