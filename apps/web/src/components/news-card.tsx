'use client';

import { useNews } from '@/hooks/use-travel-data';
import { CardShell } from './card-shell';

export function NewsCard({ city }: { city: string }) {
  const { data, isLoading, error } = useNews(city);

  return (
    <CardShell
      title="Local News"
      icon="📰"
      accentColor="border-violet-500"
      isLoading={isLoading}
      error={error?.message}
    >
      {data && (
        <ul className="space-y-3">
          {data.map((article) => (
            <li key={article.title}>
              <a href={article.url} className="group block">
                <p className="font-medium text-white group-hover:text-violet-300 transition-colors line-clamp-1">
                  {article.title}
                </p>
                <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-violet-400">{article.source}</span>
                  <span className="text-xs text-slate-500">{article.publishedAt}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </CardShell>
  );
}
