import { ServiceProps } from 'src/commom/interfaces/service-props';
import { ArticleProps } from 'src/commom/repositories/interfaces/article-repository.interface';

export type DeleteArticleParams = {
  articleId: number;
};

export type DeleteArticleErrors = 'Article not found';

export type DeleteArticleResponse = ArticleProps | null;

export interface DeleteArticleUseCase
  extends ServiceProps<
    DeleteArticleParams,
    DeleteArticleErrors,
    DeleteArticleResponse
  > {}
