import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';

@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    ZoomRangePageComponent,
    MarkersPageComponent,
    FullScreenPageComponent,
    PropertiesPageComponent,
  ],
  imports: [CommonModule, MapsRoutingModule, CounterAloneComponent],
})
export class MapsModule {}
