import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class CountryPageComponent implements OnInit {
  country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByCode(id))
      )
      .subscribe((country) => {
        if (!country) {
          this.router.navigateByUrl('');
          return;
        }

        this.country = country;
      });
  }
}
