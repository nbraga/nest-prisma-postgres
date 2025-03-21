import {
  Controller,
  Get,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';
import { FindManyArticleService } from '../services/find-many-article.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('articles')
@ApiTags('Articles')
export class FindManyArticleController {
  constructor(private findManyArticleService: FindManyArticleService) {}

  @Get()
  async execute() {
    const response = await this.findManyArticleService.execute();

    if (response.status === 'SUCCESS') {
      return response.data;
    } else {
      switch (response.error) {
        case 'Articles not found':
          throw new NotFoundException(response.error);
        default:
          throw new NotImplementedException();
      }
    }
  }
}
