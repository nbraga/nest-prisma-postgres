import { ServiceProps } from 'src/commom/interfaces/service-props';

export type CreateArticleParams = {
  title: string;
  body: string;
  published: boolean;
  description?: string;
};

export type CreateArticleErrors = 'Article not found';

export type CreateArticleResponse = null;

export interface CreateArticleUseCase
  extends ServiceProps<
    CreateArticleParams,
    CreateArticleErrors,
    CreateArticleResponse
  > {}
