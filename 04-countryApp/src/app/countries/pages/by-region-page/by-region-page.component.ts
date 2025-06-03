import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ByRegionPageComponent implements OnInit {
  countries: Country[] = [];
  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.term;
  }

  searchByRegion(region: Region): void {
    this.selectedRegion = region;

    this.countriesService
      .searchCountry(region, 'region')
      .subscribe((countries) => (this.countries = countries));
  }
}
