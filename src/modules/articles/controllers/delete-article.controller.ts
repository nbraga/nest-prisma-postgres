import {
  Controller,
  Delete,
  NotFoundException,
  NotImplementedException,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ZodValidationPipe } from 'src/commom/pipes/zod-validation.pipe';
import { DeleteArticleService } from '../services/delete-article.service';
import {
  DeleteArticleDto,
  DeleteArticleSchema,
} from './dto/delete-article.dto';

@Controller('articles')
@ApiTags('Articles')
export class DeleteArticleController {
  constructor(private deleteArticleService: DeleteArticleService) {}

  @Delete(':articleId')
  async execute(
    @Param(new ZodValidationPipe(DeleteArticleSchema)) params: DeleteArticleDto,
  ) {
    const { articleId } = params;

    const response = await this.deleteArticleService.execute({ articleId });

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
