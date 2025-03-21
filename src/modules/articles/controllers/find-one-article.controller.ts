import {
  Controller,
  Get,
  NotFoundException,
  NotImplementedException,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ZodValidationPipe } from 'src/commom/pipes/zod-validation.pipe';
import { FindOneArticleService } from '../services/find-one-article.service';
import {
  FindOneArticleDto,
  FindOneArticleSchema,
} from './dto/find-one-article.dto';

@Controller('articles')
@ApiTags('Articles')
export class FindOneArticleController {
  constructor(private findOneArticleService: FindOneArticleService) {}

  @Get(':articleId')
  async execute(
    @Param(new ZodValidationPipe(FindOneArticleSchema))
    params: FindOneArticleDto,
  ) {
    const { articleId } = params;

    console.log('🚀 ~ FindOneArticleController ~ articleId:', articleId);

    const response = await this.findOneArticleService.execute({ articleId });

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
