import { Component, Input, OnInit } from '@angular/core';
import { type Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
})
export class HeroCard implements OnInit {
  @Input() public hero!: Hero;

  ngOnInit(): void {
    if (!this.hero) throw new Error('Hero input is required');
  }
}
