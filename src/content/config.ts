import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('Ryan Barley'),
    image: z.string().optional(),
    description: z.string(),
    categories: z.string().array().default([]),
  }),
});

export const collections = {
  blog: blogCollection,
};
