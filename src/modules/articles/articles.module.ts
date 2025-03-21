import { Module } from '@nestjs/common';
import { PrismaArticleRepository } from 'src/commom/repositories/article.repository';
import { CreateArticleController } from './controllers/create-article.controller';
import { CreateArticleService } from './services/create-article.service';
import { FindManyArticleController } from './controllers/find-many-article.controller';
import { FindManyArticleService } from './services/find-many-article.service';
import { FindOneArticleController } from './controllers/find-one-article.controller';
import { FindOneArticleService } from './services/find-one-article.service';
import { DeleteArticleController } from './controllers/delete-article.controller';
import { DeleteArticleService } from './services/delete-article.service';

@Module({
  controllers: [
    CreateArticleController,
    FindManyArticleController,
    FindOneArticleController,
    DeleteArticleController,
  ],
  providers: [
    CreateArticleService,
    FindManyArticleService,
    FindOneArticleService,
    DeleteArticleService,
    PrismaArticleRepository,
  ],
  imports: [],
})
export class ArticlesModule {}
