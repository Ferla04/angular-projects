import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';

const components = [
  SideMenuComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
