import { Country } from './country';
import { Region } from './region.type';

export interface CacheStore {
  byCapital: TermStore;
  byCountries: TermStore;
  byRegion: RegionCountries;
}

export interface TermStore {
  term: string;
  countries: Country[];
}

export interface RegionCountries {
  term: Region;
  countries: Country[];
}
