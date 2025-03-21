import { Injectable } from '@nestjs/common';
import { PrismaArticleRepository } from 'src/commom/repositories/article.repository';
import {
  DeleteArticleErrors,
  DeleteArticleParams,
  DeleteArticleResponse,
  DeleteArticleUseCase,
} from './use-cases/delete-article.use-case';

@Injectable()
export class DeleteArticleService implements DeleteArticleUseCase {
  constructor(private readonly articleRepository: PrismaArticleRepository) {}

  async execute({
    articleId,
  }: DeleteArticleParams): Promise<
    | { status: 'SUCCESS'; data: DeleteArticleResponse }
    | { status: 'ERROR'; error: DeleteArticleErrors }
  > {
    const article = await this.articleRepository.findOne(articleId);

    if (!article) {
      return {
        status: 'ERROR',
        error: 'Article not found',
      };
    }

    await this.articleRepository.delete(articleId);

    return {
      status: 'SUCCESS',
      data: null,
    };
  }
}
