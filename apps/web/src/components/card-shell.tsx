import type { ReactNode } from 'react';

interface CardShellProps {
  title: string;
  icon: string;
  accentColor: string;
  isLoading: boolean;
  error?: string;
  children: ReactNode;
}

export function CardShell({
  title,
  icon,
  accentColor,
  isLoading,
  error,
  children,
}: CardShellProps) {
  return (
    <div
      className={`rounded-2xl border-t-4 ${accentColor} bg-slate-800/70 backdrop-blur-sm p-5 shadow-lg`}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">{icon}</span>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>

      {isLoading && (
        <div className="space-y-3 animate-pulse">
          <div className="h-4 bg-slate-700 rounded w-3/4" />
          <div className="h-4 bg-slate-700 rounded w-1/2" />
          <div className="h-4 bg-slate-700 rounded w-2/3" />
        </div>
      )}

      {error && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}

      {!isLoading && !error && children}
    </div>
  );
}
