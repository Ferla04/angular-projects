import { NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

const components = [MenuComponent];

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  exports: components,
  declarations: components,
})
export class SharedModule {}
