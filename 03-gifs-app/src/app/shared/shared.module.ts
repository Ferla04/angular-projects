import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

const components = [SidebarComponent, LazyImageComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule],
})
export class SharedModule {}
