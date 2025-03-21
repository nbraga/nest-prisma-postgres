import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const DeleteArticleSchema = z.object({
  articleId: z.coerce.number(),
});

export class DeleteArticleDto extends createZodDto(DeleteArticleSchema) {}
