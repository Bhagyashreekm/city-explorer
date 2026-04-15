'use client';

import { useCityStore } from '@/store/city-store';
import { WeatherCard } from './weather-card';
import { AttractionsCard } from './attractions-card';
import { NewsCard } from './news-card';
import { CurrencyCard } from './currency-card';

export function Dashboard() {
  const city = useCityStore((s) => s.city);

  if (!city) {
    return (
      <div className="text-center py-20">
        <p className="text-6xl mb-4">🌍</p>
        <h2 className="text-2xl font-semibold text-white mb-2">
          Explore Any City
        </h2>
        <p className="text-slate-400 max-w-md mx-auto">
          Enter a city name above to get weather, top attractions, local news,
          and currency exchange rates — all in one place.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-6 text-center">
        Showing results for{' '}
        <span className="text-sky-400 capitalize">{city}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeatherCard city={city} />
        <AttractionsCard city={city} />
        <NewsCard city={city} />
        <CurrencyCard city={city} />
      </div>
    </div>
  );
}
