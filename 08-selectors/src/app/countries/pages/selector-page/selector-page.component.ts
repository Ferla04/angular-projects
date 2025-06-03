import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, type FormGroup } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { filter, Subscription, switchMap, tap } from 'rxjs';
import type { SmallCountry } from '../../interfaces/country';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPageComponent implements OnInit, OnDestroy {
  public contriesByRegion: SmallCountry[] = [];
  public bordersByCountry: SmallCountry[] = [];

  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  })

  private regionChangeSubscription?: Subscription;
  private countryChangeSubscription?: Subscription;

  constructor(private fb: FormBuilder, private countriesService:CountriesService) {}

  get regions() {
    return this.countriesService.regions;
  }

  ngOnInit(): void {
    this.onRegionChange()
    this.onCountryChange();
  }

  private onRegionChange() {
    this.regionChangeSubscription = this.myForm.get('region')?.valueChanges
    .pipe(
      tap(() => {
        this.myForm.get('country')!.setValue('', { emitEvent: false });
        this.myForm.get('border')!.setValue('', { emitEvent: false });
      }),
      switchMap(region => this.countriesService.getContriesByRegion(region))
    )
    .subscribe(contries => {
      this.contriesByRegion = contries;
    })
  }

  private onCountryChange() {
    this.countryChangeSubscription = this.myForm.get('country')?.valueChanges
      .pipe(
        tap(() => {
          this.myForm.get('border')!.setValue('', { emitEvent: false });
        }),
        filter(value => value.length > 0),
        switchMap((alphaCode) => this.countriesService.getCountryByAlphaCode(alphaCode)),
        switchMap((country) => this.countriesService.getCountryByBordersByCodes(country.borders))
      )
      .subscribe(borders => {
        this.bordersByCountry = borders;
      });
  }

  ngOnDestroy(): void {
    this.regionChangeSubscription?.unsubscribe();
    this.countryChangeSubscription?.unsubscribe();
  }
}
