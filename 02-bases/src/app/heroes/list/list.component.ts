import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  public heroDeleted?: string;

  deleteLastHero(): void {
    this.heroDeleted =  this.heroNames.pop();
  }
}
