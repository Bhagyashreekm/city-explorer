'use client';

import { useState } from 'react';
import { useCityStore } from '@/store/city-store';
import { cityInputSchema } from '@/lib/schemas';

export function SearchBar() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const { setCity, searchHistory } = useCityStore();

  const handleSearch = () => {
    const result = cityInputSchema.safeParse(input.trim());
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    setError('');
    setCity(result.data);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError('');
          }}
          onKeyDown={handleKeyDown}
          placeholder="Enter a city name... (e.g. Paris, Tokyo, Mumbai)"
          className="flex-1 rounded-xl border border-slate-600 bg-slate-800/50 px-5 py-3.5
                     text-white placeholder-slate-400 outline-none
                     focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30
                     transition-all text-lg"
        />
        <button
          onClick={handleSearch}
          className="rounded-xl bg-sky-600 px-8 py-3.5 font-semibold text-white
                     hover:bg-sky-500 active:bg-sky-700
                     transition-colors text-lg"
        >
          Search
        </button>
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-400">{error}</p>
      )}

      {searchHistory.length > 0 && (
        <div className="mt-3 flex items-center gap-2 flex-wrap">
          <span className="text-sm text-slate-400">Recent:</span>
          {searchHistory.map((city) => (
            <button
              key={city}
              onClick={() => {
                setInput(city);
                setCity(city);
              }}
              className="rounded-lg bg-slate-700/60 px-3 py-1 text-sm text-slate-300
                         hover:bg-slate-600 transition-colors"
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
