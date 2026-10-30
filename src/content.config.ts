import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('Web Development'),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tagline: z.string().optional(),
    category: z.string().default('Web'),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    techStack: z.array(z.string()).default([]),
    demoUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    status: z.enum(['Active', 'Completed', 'In Development', 'Prototype']).default('Completed'),
    cover: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    subtitle: z.string().optional(),
  }),
});

export const collections = { posts, projects, pages };
