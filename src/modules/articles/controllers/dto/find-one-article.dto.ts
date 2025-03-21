import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const FindOneArticleSchema = z.object({
  articleId: z.coerce.number(),
});

export class FindOneArticleDto extends createZodDto(FindOneArticleSchema) {}
