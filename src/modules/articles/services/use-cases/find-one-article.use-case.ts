import { ServiceProps } from 'src/commom/interfaces/service-props';
import { ArticleProps } from 'src/commom/repositories/interfaces/article-repository.interface';

export type FindOneArticleParams = {
  articleId: number;
};

export type FindOneArticleErrors = 'Article not found';

export type FindOneArticleResponse = ArticleProps | null;

export interface FindOneArticleUseCase
  extends ServiceProps<
    FindOneArticleParams,
    FindOneArticleErrors,
    FindOneArticleResponse
  > {}
