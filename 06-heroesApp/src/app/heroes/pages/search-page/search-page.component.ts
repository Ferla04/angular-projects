import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { type MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { type Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero: Hero | undefined;

  constructor(private heroesService: HeroesService) {}

  searchHero() {
    const value = this.searchInput.value ?? '';

    if (value.length === 0) {
      this.heroes = [];
      return;
    }

    this.heroesService.getSuggestions(value).subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent) {
    if (event.option.value === '') {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
  }
}
