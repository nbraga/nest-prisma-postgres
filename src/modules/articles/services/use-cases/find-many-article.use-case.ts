import { ServiceProps } from 'src/commom/interfaces/service-props';
import { ArticleProps } from 'src/commom/repositories/interfaces/article-repository.interface';

export type FindManyArticleParams = {};

export type FindManyArticleErrors = 'Articles not found';

export type FindManyArticleResponse = ArticleProps[];

export interface FindManyArticleUseCase
  extends ServiceProps<
    FindManyArticleParams,
    FindManyArticleErrors,
    FindManyArticleResponse
  > {}
