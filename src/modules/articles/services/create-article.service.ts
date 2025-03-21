import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from '../controllers/dto/create-article.dto';
import {
  CreateArticleErrors,
  CreateArticleParams,
  CreateArticleResponse,
  CreateArticleUseCase,
} from './use-cases/create-article.use-case';
import { PrismaArticleRepository } from 'src/commom/repositories/article.repository';

@Injectable()
export class CreateArticleService implements CreateArticleUseCase {
  constructor(private readonly articleRepository: PrismaArticleRepository) {}

  async execute(
    data: CreateArticleParams,
  ): Promise<
    | { status: 'SUCCESS'; data: CreateArticleResponse }
    | { status: 'ERROR'; error: CreateArticleErrors }
  > {
    /*  if (!article) {
      return {
        status: 'ERROR',
        error: 'Article not found',
      };
    } */

    await this.articleRepository.create(data);

    return {
      status: 'SUCCESS',
      data: null,
    };
  }
}
