import { SearchBar } from '@/components/search-bar';
import { Dashboard } from '@/components/dashboard';

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          🌍 Smart Travel Companion
        </h1>
        <p className="text-slate-400 text-lg">
          Your one-stop dashboard for any city in the world
        </p>
      </header>

      <SearchBar />

      <section className="mt-10 max-w-5xl mx-auto">
        <Dashboard />
      </section>    </main>
  );
}
