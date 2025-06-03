import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ByCountryPageComponent implements OnInit {
  countries: Country[] = [];
  initialValue = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.initialValue = this.countriesService.cacheStore.byRegion.term;
  }

  searchByCountry(country: string): void {
    this.countriesService
      .searchCountry(country, 'name')
      .subscribe((countries) => (this.countries = countries));
  }
}
