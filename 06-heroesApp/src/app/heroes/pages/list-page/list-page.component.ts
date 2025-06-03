import { ChangeDetectorRef, Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { type Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent {
  public heroes: Hero[] = [];

  constructor(
    private heroesService: HeroesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
      this.cdr.detectChanges();
    });
  }
}
