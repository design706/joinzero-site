import { z, defineCollection } from 'astro:content';

const learnCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ring: z.enum(['1','2','3']),
    date: z.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    canonical: z.string(),
  }),
});

export const collections = {
  learn: learnCollection,
};
