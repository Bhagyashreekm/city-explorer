const cityCurrencyMap: Record<string, string> = {
  paris: 'EUR',
  london: 'GBP',
  tokyo: 'JPY',
  'new york': 'USD',
  dubai: 'AED',
  rome: 'EUR',
  barcelona: 'EUR',
  sydney: 'AUD',
  mumbai: 'INR',
  berlin: 'EUR',
  toronto: 'CAD',
  beijing: 'CNY',
  seoul: 'KRW',
  bangkok: 'THB',
  istanbul: 'TRY',
  singapore: 'SGD',
  'kuala lumpur': 'MYR',
  cairo: 'EGP',
  moscow: 'RUB',
  'sao paulo': 'BRL',
};

export function getCurrencyForCity(city: string): string {
  return cityCurrencyMap[city.toLowerCase()] ?? 'USD';
}
