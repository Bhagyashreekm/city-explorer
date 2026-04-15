'use client';

import { useAttractions } from '@/hooks/use-travel-data';
import { CardShell } from './card-shell';

const categoryBadge: Record<string, string> = {
  Landmark: 'bg-sky-500/20 text-sky-300',
  Museum: 'bg-amber-500/20 text-amber-300',
  Historical: 'bg-rose-500/20 text-rose-300',
  Nature: 'bg-emerald-500/20 text-emerald-300',
  Temple: 'bg-violet-500/20 text-violet-300',
  Neighborhood: 'bg-indigo-500/20 text-indigo-300',
  Shopping: 'bg-pink-500/20 text-pink-300',
};

export function AttractionsCard({ city }: { city: string }) {
  const { data, isLoading, error } = useAttractions(city);

  return (
    <CardShell
      title="Top Attractions"
      icon="📍"
      accentColor="border-emerald-500"
      isLoading={isLoading}
      error={error?.message}
    >
      {data && (
        <ul className="space-y-3">
          {data.map((place) => (
            <li key={place.name} className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="font-medium text-white truncate">{place.name}</p>
                <p className="text-xs text-slate-400 line-clamp-1">{place.description}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`rounded-full px-2 py-0.5 text-xs ${categoryBadge[place.category] ?? 'bg-slate-600 text-slate-300'}`}>
                  {place.category}
                </span>
                <span className="text-xs text-amber-400">★ {place.rating}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </CardShell>
  );
}
