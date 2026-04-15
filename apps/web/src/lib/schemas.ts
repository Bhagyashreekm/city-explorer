import { z } from 'zod';

export const cityInputSchema = z
  .string()
  .min(2, 'City name must be at least 2 characters')
  .max(50, 'City name is too long')
  .regex(
    /^[a-zA-Z\s-]+$/,
    'City name can only contain letters, spaces, and hyphens',
  );

export const weatherSchema = z.object({
  temperature: z.number(),
  description: z.string(),
  humidity: z.number(),
  windSpeed: z.number(),
  feelsLike: z.number(),
});

export const attractionSchema = z.object({
  name: z.string(),
  description: z.string(),
  rating: z.number(),
  category: z.string(),
});

export const attractionsResponseSchema = z.array(attractionSchema);

export const newsArticleSchema = z.object({
  title: z.string(),
  description: z.string(),
  source: z.string(),
  publishedAt: z.string(),
  url: z.string(),
});

export const newsResponseSchema = z.array(newsArticleSchema);

export const currencySchema = z.object({
  base: z.string(),
  date: z.string(),
  rates: z.record(z.string(), z.number()),
});

export type Weather = z.infer<typeof weatherSchema>;
export type Attraction = z.infer<typeof attractionSchema>;
export type NewsArticle = z.infer<typeof newsArticleSchema>;
export type Currency = z.infer<typeof currencySchema>;
