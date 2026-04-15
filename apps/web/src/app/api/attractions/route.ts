import { NextRequest, NextResponse } from 'next/server';

type AttractionData = {
  name: string;
  description: string;
  rating: number;
  category: string;
};

const attractionsDB: Record<string, AttractionData[]> = {
  paris: [
    { name: 'Eiffel Tower', description: 'Iconic iron lattice tower on the Champ de Mars', rating: 4.7, category: 'Landmark' },
    { name: 'Louvre Museum', description: "World's largest art museum and historic monument", rating: 4.8, category: 'Museum' },
    { name: 'Notre-Dame Cathedral', description: 'Medieval Catholic cathedral on the Ile de la Cite', rating: 4.6, category: 'Historical' },
    { name: 'Montmartre', description: 'Hilltop district known for Sacre-Coeur Basilica', rating: 4.5, category: 'Neighborhood' },
  ],
  london: [
    { name: 'Big Ben', description: 'Famous clock tower at the Houses of Parliament', rating: 4.6, category: 'Landmark' },
    { name: 'British Museum', description: 'World-famous museum of art and antiquities', rating: 4.8, category: 'Museum' },
    { name: 'Tower of London', description: 'Historic castle and fortress on the River Thames', rating: 4.7, category: 'Historical' },
    { name: 'Buckingham Palace', description: 'Official residence of the British monarch', rating: 4.5, category: 'Landmark' },
  ],
  tokyo: [
    { name: 'Senso-ji Temple', description: 'Ancient Buddhist temple in Asakusa', rating: 4.6, category: 'Temple' },
    { name: 'Shibuya Crossing', description: 'Famous scramble intersection in the heart of Tokyo', rating: 4.4, category: 'Landmark' },
    { name: 'Tokyo Tower', description: 'Iconic communications and observation tower', rating: 4.5, category: 'Landmark' },
    { name: 'Meiji Shrine', description: 'Shinto shrine dedicated to Emperor Meiji', rating: 4.7, category: 'Temple' },
  ],
  'new york': [
    { name: 'Statue of Liberty', description: 'Colossal neoclassical sculpture on Liberty Island', rating: 4.7, category: 'Landmark' },
    { name: 'Central Park', description: 'Expansive urban park in the heart of Manhattan', rating: 4.8, category: 'Nature' },
    { name: 'Times Square', description: 'Bustling commercial and entertainment hub', rating: 4.3, category: 'Landmark' },
    { name: 'Brooklyn Bridge', description: 'Historic hybrid cable-stayed suspension bridge', rating: 4.6, category: 'Landmark' },
  ],
  dubai: [
    { name: 'Burj Khalifa', description: 'Tallest building in the world at 828 metres', rating: 4.8, category: 'Landmark' },
    { name: 'Dubai Mall', description: 'One of the largest shopping malls globally', rating: 4.6, category: 'Shopping' },
    { name: 'Palm Jumeirah', description: 'Iconic artificial island shaped like a palm tree', rating: 4.5, category: 'Landmark' },
    { name: 'Dubai Marina', description: 'Upscale waterfront district with stunning skyline', rating: 4.4, category: 'Neighborhood' },
  ],
  mumbai: [
    { name: 'Gateway of India', description: 'Iconic arch monument overlooking the Arabian Sea', rating: 4.6, category: 'Landmark' },
    { name: 'Marine Drive', description: 'Scenic coastal boulevard along the seafront', rating: 4.5, category: 'Nature' },
    { name: 'Elephanta Caves', description: 'Ancient rock-cut cave temples on an island', rating: 4.4, category: 'Historical' },
    { name: 'Chhatrapati Shivaji Terminus', description: 'UNESCO heritage Victorian Gothic railway station', rating: 4.7, category: 'Historical' },
  ],
  rome: [
    { name: 'Colosseum', description: 'Ancient amphitheatre and iconic symbol of Rome', rating: 4.8, category: 'Historical' },
    { name: 'Vatican Museums', description: 'World-renowned art galleries in Vatican City', rating: 4.7, category: 'Museum' },
    { name: 'Trevi Fountain', description: 'Baroque fountain and popular tourist landmark', rating: 4.6, category: 'Landmark' },
    { name: 'Pantheon', description: 'Well-preserved ancient Roman temple', rating: 4.8, category: 'Historical' },
  ],
  sydney: [
    { name: 'Sydney Opera House', description: 'Iconic performing arts venue on the harbour', rating: 4.7, category: 'Landmark' },
    { name: 'Harbour Bridge', description: 'Steel arch bridge spanning Sydney Harbour', rating: 4.6, category: 'Landmark' },
    { name: 'Bondi Beach', description: 'Famous golden-sand beach popular with surfers', rating: 4.5, category: 'Nature' },
    { name: 'Royal Botanic Garden', description: 'Expansive garden beside the Sydney Opera House', rating: 4.4, category: 'Nature' },
  ],
};

const defaultAttractions: AttractionData[] = [
  { name: 'City Center', description: 'Explore the vibrant heart of the city', rating: 4.2, category: 'Landmark' },
  { name: 'Local Museum', description: 'Discover the rich history and culture', rating: 4.0, category: 'Museum' },
  { name: 'Main Park', description: 'Beautiful green space perfect for relaxation', rating: 4.3, category: 'Nature' },
  { name: 'Old Town', description: 'Historic district with traditional architecture', rating: 4.1, category: 'Historical' },
];

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get('city');
  if (!city) {
    return NextResponse.json({ error: 'City is required' }, { status: 400 });
  }

  await new Promise((resolve) => setTimeout(resolve, 200));

  const attractions = attractionsDB[city.toLowerCase()] ?? defaultAttractions;
  return NextResponse.json(attractions);
}
