import { CreateArticleParams } from 'src/modules/articles/services/use-cases/create-article.use-case';

export interface ArticleProps {
  id: number;
  title: string;
  body: string;
  description: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ArticleRepositoryProps {
  create(article: CreateArticleParams): Promise<void>;

  findMany(): Promise<ArticleProps[]>;

  findOne(articleId: number): Promise<ArticleProps | null>;
}
