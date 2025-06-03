import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

const pages = [AboutPageComponent, HomePageComponent];
const components = [
  SidebarComponent,
  SearchBoxComponent,
  LoadingSpinnerComponent,
];

@NgModule({
  declarations: [...pages, ...components],
  exports: [...pages, ...components],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
