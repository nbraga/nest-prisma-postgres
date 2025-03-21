import { Injectable } from '@nestjs/common';
import { PrismaArticleRepository } from 'src/commom/repositories/article.repository';
import {
  FindManyArticleErrors,
  FindManyArticleResponse,
  FindManyArticleUseCase,
} from './use-cases/find-many-article.use-case';

@Injectable()
export class FindManyArticleService implements FindManyArticleUseCase {
  constructor(private readonly articleRepository: PrismaArticleRepository) {}

  async execute(): Promise<
    | { status: 'SUCCESS'; data: FindManyArticleResponse }
    | { status: 'ERROR'; error: FindManyArticleErrors }
  > {
    const articles = await this.articleRepository.findMany();

    return {
      status: 'SUCCESS',
      data: articles,
    };
  }
}
