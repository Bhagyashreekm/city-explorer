import { NextRequest, NextResponse } from 'next/server';

type NewsData = {
  title: string;
  description: string;
  source: string;
  publishedAt: string;
  url: string;
};

const newsDB: Record<string, NewsData[]> = {
  paris: [
    { title: 'Paris Metro Expands with New Line 15', description: 'The Grand Paris Express project adds a new automated metro line connecting suburbs.', source: 'Le Monde', publishedAt: '2025-04-10', url: '#' },
    { title: 'Louvre Sets Record Visitor Numbers', description: 'The famous museum reports its highest visitor count in over a decade.', source: 'France 24', publishedAt: '2025-04-08', url: '#' },
    { title: 'Paris Hosts International Climate Summit', description: 'World leaders gather in Paris to discuss new environmental agreements.', source: 'Reuters', publishedAt: '2025-04-05', url: '#' },
  ],
  london: [
    { title: 'London Launches Green Transport Initiative', description: 'New electric bus routes aim to reduce emissions across the city.', source: 'BBC News', publishedAt: '2025-04-12', url: '#' },
    { title: 'West End Theatre Season Breaks Records', description: 'Record-breaking ticket sales reported across major London theatres.', source: 'The Guardian', publishedAt: '2025-04-09', url: '#' },
    { title: 'Thames Barrier Upgrade Announced', description: 'Multi-billion pound project to modernize flood defenses along the Thames.', source: 'Evening Standard', publishedAt: '2025-04-06', url: '#' },
  ],
  tokyo: [
    { title: 'Tokyo Unveils Next-Gen Bullet Train', description: 'The new Shinkansen model reaches speeds of 400 km/h on test runs.', source: 'NHK World', publishedAt: '2025-04-11', url: '#' },
    { title: 'Cherry Blossom Season Draws Millions', description: 'Record crowds flock to parks across Tokyo for hanami celebrations.', source: 'Japan Times', publishedAt: '2025-04-07', url: '#' },
    { title: 'Tokyo Tech Hub Attracts Global Startups', description: 'Shibuya district becomes a major hub for international tech companies.', source: 'Nikkei Asia', publishedAt: '2025-04-04', url: '#' },
  ],
  dubai: [
    { title: 'Dubai Completes World-Tallest Residential Tower', description: 'A new residential skyscraper surpasses previous height records.', source: 'Gulf News', publishedAt: '2025-04-10', url: '#' },
    { title: 'Dubai International Airport Sets Passenger Record', description: 'DXB processes over 90 million passengers in a single year.', source: 'Arabian Business', publishedAt: '2025-04-08', url: '#' },
    { title: 'Sustainable City Project Expands', description: 'Dubai expands its eco-friendly residential community with solar-powered homes.', source: 'The National', publishedAt: '2025-04-03', url: '#' },
  ],
  mumbai: [
    { title: 'Mumbai Metro Line 3 Nears Completion', description: 'The underground metro connecting airport to South Mumbai approaches final phase.', source: 'Times of India', publishedAt: '2025-04-11', url: '#' },
    { title: 'Bollywood Film Festival Announced', description: 'Mumbai gears up for its annual celebration of Indian cinema.', source: 'NDTV', publishedAt: '2025-04-09', url: '#' },
    { title: 'Coastal Road Project Transforms Commutes', description: 'New coastal highway dramatically reduces travel time across the city.', source: 'Hindustan Times', publishedAt: '2025-04-06', url: '#' },
  ],
};

const defaultNews: NewsData[] = [
  { title: 'City Announces Major Infrastructure Upgrade', description: 'Local government reveals plans for modernizing public transportation.', source: 'City Herald', publishedAt: '2025-04-10', url: '#' },
  { title: 'Tourism Sector Shows Strong Growth', description: 'Visitor numbers continue to rise as the city attracts global tourists.', source: 'Travel Weekly', publishedAt: '2025-04-08', url: '#' },
  { title: 'Cultural Festival Draws International Attention', description: 'Annual arts and culture festival puts the city on the global stage.', source: 'World News', publishedAt: '2025-04-05', url: '#' },
];

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get('city');
  if (!city) {
    return NextResponse.json({ error: 'City is required' }, { status: 400 });
  }

  await new Promise((resolve) => setTimeout(resolve, 250));

  const news = newsDB[city.toLowerCase()] ?? defaultNews;
  return NextResponse.json(news);
}
