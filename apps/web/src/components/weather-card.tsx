'use client';

import { useWeather } from '@/hooks/use-travel-data';
import { CardShell } from './card-shell';

const weatherEmoji: Record<string, string> = {
  sunny: '☀️',
  clear: '☀️',
  'partly cloudy': '⛅',
  cloudy: '☁️',
  overcast: '☁️',
  rain: '🌧️',
  'light rain': '🌦️',
  'heavy rain': '🌧️',
  drizzle: '🌦️',
  snow: '❄️',
  thunderstorm: '⛈️',
  fog: '🌫️',
  mist: '🌫️',
  haze: '🌫️',
};

function getWeatherEmoji(description: string): string {
  const lower = description.toLowerCase();
  for (const [key, emoji] of Object.entries(weatherEmoji)) {
    if (lower.includes(key)) return emoji;
  }
  return '🌡️';
}

export function WeatherCard({ city }: { city: string }) {
  const { data, isLoading, error } = useWeather(city);

  return (
    <CardShell
      title="Weather"
      icon="🌦️"
      accentColor="border-sky-500"
      isLoading={isLoading}
      error={error?.message}
    >
      {data && (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{getWeatherEmoji(data.description)}</span>
            <div>
              <p className="text-3xl font-bold text-white">{data.temperature}°C</p>
              <p className="text-slate-400 capitalize">{data.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-700">
            <div className="text-center">
              <p className="text-xs text-slate-400">Feels Like</p>
              <p className="text-sm font-medium text-slate-200">{data.feelsLike}°C</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400">Humidity</p>
              <p className="text-sm font-medium text-slate-200">{data.humidity}%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400">Wind</p>
              <p className="text-sm font-medium text-slate-200">{data.windSpeed} km/h</p>
            </div>
          </div>
        </div>
      )}
    </CardShell>
  );
}
