import { CreateArticleParams } from 'src/modules/articles/services/use-cases/create-article.use-case';
import { prisma } from '../config/prisma-client';
import {
  ArticleProps,
  ArticleRepositoryProps,
} from './interfaces/article-repository.interface';

export class PrismaArticleRepository implements ArticleRepositoryProps {
  async create(data: CreateArticleParams): Promise<void> {
    await prisma.article.create({
      data: data,
    });
  }

  async findMany(): Promise<ArticleProps[]> {
    const articles = await prisma.article.findMany();
    return articles;
  }
}
