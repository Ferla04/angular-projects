import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { type Country, Region, type SmallCountry } from '../interfaces/country';
import { combineLatest, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private baseUrl = 'https://restcountries.com/v3.1'
  private _regions: Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania];

  constructor(private http: HttpClient) {}

  get regions(): Region[] {
    return [...this._regions];
  }

  getContriesByRegion(region: Region): Observable<SmallCountry[]> {
    if (!region) return of([])

    const url= `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;

    return this.http.get<Country[]>(url).pipe(
      map(countries => countries.map(country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      })))
    );
  }

  getCountryByAlphaCode(alphaCode: string): Observable<SmallCountry> {
    const url = `${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`;

    return this.http.get<Country>(url).pipe(
      map(country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      }))
    );
  }

  getCountryByBordersByCodes(borders: string[]): Observable<SmallCountry[]> {
    if (!borders || borders.length === 0) return of([]);

    const url = `${this.baseUrl}/alpha?codes=${borders.join(',')}&fields=cca3,name`;

    return this.http.get<Country[]>(url).pipe(
      map(countries => countries.map(country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      })))
    );

    // Otra opción usando combineLatest
    // const countriesRequests: Observable<SmallCountry>[] = borders.map(code => this.getCountryByAlphaCode(code));
    // return combineLatest(countriesRequests)
  }
}
