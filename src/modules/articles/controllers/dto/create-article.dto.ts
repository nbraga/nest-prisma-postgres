import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const CreateArticleSchema = z.object({
  title: z.string(),
  body: z.string(),
  description: z.string().optional(),
  published: z.boolean(),
});

export class CreateArticleDto extends createZodDto(CreateArticleSchema) {}
