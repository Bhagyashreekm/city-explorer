'use client';

import { useCurrency } from '@/hooks/use-travel-data';
import { CardShell } from './card-shell';

const majorCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'INR', 'AED', 'AUD', 'CAD'];

export function CurrencyCard({ city }: { city: string }) {
  const { data, isLoading, error } = useCurrency(city);

  const displayRates = data
    ? Object.entries(data.rates)
        .filter(([code]) => majorCurrencies.includes(code))
        .slice(0, 6)
    : [];

  return (
    <CardShell
      title="Currency Exchange"
      icon="💱"
      accentColor="border-amber-500"
      isLoading={isLoading}
      error={error?.message}
    >
      {data && (
        <div className="space-y-2">
          <p className="text-xs text-slate-400">
            Base: <span className="font-semibold text-amber-400">{data.base}</span>
            {' · '}
            {data.date}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {displayRates.map(([code, rate]) => (
              <div
                key={code}
                className="flex items-center justify-between rounded-lg bg-slate-700/40 px-3 py-2"
              >
                <span className="text-sm font-medium text-slate-300">{code}</span>
                <span className="text-sm text-white font-mono">
                  {rate < 10 ? rate.toFixed(4) : rate.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </CardShell>
  );
}
