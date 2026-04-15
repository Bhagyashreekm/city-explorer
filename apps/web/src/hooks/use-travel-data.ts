import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import {
  weatherSchema,
  attractionsResponseSchema,
  newsResponseSchema,
  currencySchema,
} from '@/lib/schemas';
import type { Weather, Attraction, NewsArticle, Currency } from '@/lib/schemas';

async function fetchAndValidate<T>(
  url: string,
  schema: z.ZodType<T>,
): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const data = await res.json();
  return schema.parse(data);
}

export function useWeather(city: string) {
  return useQuery<Weather>({
    queryKey: ['weather', city],
    queryFn: () =>
      fetchAndValidate(
        `/api/weather?city=${encodeURIComponent(city)}`,
        weatherSchema,
      ),
    enabled: city.length > 0,
    staleTime: 10 * 60 * 1000,
  });
}

export function useAttractions(city: string) {
  return useQuery<Attraction[]>({
    queryKey: ['attractions', city],
    queryFn: () =>
      fetchAndValidate(
        `/api/attractions?city=${encodeURIComponent(city)}`,
        attractionsResponseSchema,
      ),
    enabled: city.length > 0,
    staleTime: 30 * 60 * 1000,
  });
}

export function useNews(city: string) {
  return useQuery<NewsArticle[]>({
    queryKey: ['news', city],
    queryFn: () =>
      fetchAndValidate(
        `/api/news?city=${encodeURIComponent(city)}`,
        newsResponseSchema,
      ),
    enabled: city.length > 0,
    staleTime: 15 * 60 * 1000,
  });
}

export function useCurrency(city: string) {
  return useQuery<Currency>({
    queryKey: ['currency', city],
    queryFn: () =>
      fetchAndValidate(
        `/api/currency?city=${encodeURIComponent(city)}`,
        currencySchema,
      ),
    enabled: city.length > 0,
    staleTime: 60 * 60 * 1000,
  });
}
