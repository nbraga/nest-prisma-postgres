import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateArticleController } from './controllers/create-article.controller';
import { CreateArticleService } from './services/create-article.service';
import { PrismaArticleRepository } from 'src/commom/repositories/article.repository';

@Module({
  controllers: [CreateArticleController],
  providers: [CreateArticleService, PrismaArticleRepository],
  imports: [],
})
export class ArticlesModule {}
