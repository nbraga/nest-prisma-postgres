import { Injectable } from '@nestjs/common';
import { PrismaArticleRepository } from 'src/commom/repositories/article.repository';
import {
  FindOneArticleErrors,
  FindOneArticleParams,
  FindOneArticleResponse,
  FindOneArticleUseCase,
} from './use-cases/find-one-article.use-case';

@Injectable()
export class FindOneArticleService implements FindOneArticleUseCase {
  constructor(private readonly articleRepository: PrismaArticleRepository) {}

  async execute({
    articleId,
  }: FindOneArticleParams): Promise<
    | { status: 'SUCCESS'; data: FindOneArticleResponse }
    | { status: 'ERROR'; error: FindOneArticleErrors }
  > {
    const article = await this.articleRepository.findOne(articleId);

    if (!article) {
      return {
        status: 'ERROR',
        error: 'Article not found',
      };
    }

    return {
      status: 'SUCCESS',
      data: article,
    };
  }
}
