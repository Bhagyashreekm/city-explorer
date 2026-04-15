import { create } from 'zustand';

interface CityState {
  city: string;
  setCity: (city: string) => void;
  searchHistory: string[];
}

export const useCityStore = create<CityState>((set) => ({
  city: '',
  searchHistory: [],
  setCity: (city) =>
    set((state) => ({
      city,
      searchHistory: state.searchHistory.includes(city)
        ? state.searchHistory
        : [city, ...state.searchHistory].slice(0, 5),
    })),
}));
