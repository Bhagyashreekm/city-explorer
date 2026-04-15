import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get('city');
  if (!city) {
    return NextResponse.json({ error: 'City is required' }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://wttr.in/${encodeURIComponent(city)}?format=j1`,
      { next: { revalidate: 600 } },
    );

    if (!res.ok) throw new Error('Weather API failed');

    const data = await res.json();
    const current = data.current_condition[0];

    return NextResponse.json({
      temperature: parseInt(current.temp_C, 10),
      description: current.weatherDesc[0].value,
      humidity: parseInt(current.humidity, 10),
      windSpeed: parseInt(current.windspeedKmph, 10),
      feelsLike: parseInt(current.FeelsLikeC, 10),
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 },
    );
  }
}
