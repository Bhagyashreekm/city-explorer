import { NextRequest, NextResponse } from 'next/server';
import { getCurrencyForCity } from '@/lib/city-currency-map';

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get('city');
  if (!city) {
    return NextResponse.json({ error: 'City is required' }, { status: 400 });
  }

  const base = getCurrencyForCity(city);

  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?from=${base}`,
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) throw new Error('Currency API failed');

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch currency rates' },
      { status: 500 },
    );
  }
}
