import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';

type SearchType = 'name' | 'capital' | 'region';
const keyType: Record<string, 'byCountries' | 'byCapital' | 'byRegion'> = {
  name: 'byCountries',
  capital: 'byCapital',
  region: 'byRegion',
};

@Injectable({ providedIn: 'root' })
export class CountriesService {
  apiUrl: string = 'https://restcountries.com/v3.1';
  cacheStore: CacheStore = {
    byCapital: {
      term: '',
      countries: [],
    },
    byCountries: {
      term: '',
      countries: [],
    },
    byRegion: {
      term: '',
      countries: [],
    },
  };

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(): void {
    const cacheStore = localStorage.getItem('cacheStore');
    if (cacheStore) {
      this.cacheStore = JSON.parse(cacheStore);
    }
  }

  private getCountryRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError((_error) => of([]))
      // delay(1000)
    );
  }

  searchCountryByCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) => countries[0] ?? null),
      catchError((_error) => of(null))
    );
  }

  searchCountry(name: string, type: SearchType): Observable<Country[]> {
    const url = `${this.apiUrl}/${type}/${name}`;
    return this.getCountryRequest(url).pipe(
      tap((countries) => {
        this.cacheStore[keyType[type]].term = name;
        this.cacheStore[keyType[type]].countries = countries;
      }),
      tap(() => this.saveToLocalStorage())
    );
  }
}
