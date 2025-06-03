import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ByCapitalPageComponent implements OnInit {
  countries: Country[] = [];
  isLoading: boolean = false;
  initialValue = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(capital: string): void {
    this.isLoading = true;

    this.countriesService
      .searchCountry(capital, 'capital')
      .subscribe((countries) => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
