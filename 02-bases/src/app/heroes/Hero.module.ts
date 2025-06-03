import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

const components = [
  HeroComponent,
  ListComponent
]

@NgModule({
  imports: [CommonModule],
  exports: components,
  declarations: components,
  providers: [],
})
export class HeroModule {

}
