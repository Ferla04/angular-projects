import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Map } from 'maplibre-gl';

@Component({
  selector: 'maps-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomRangePageComponent {
  @ViewChild('map')
  public mapElement?: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    if (!this.mapElement) {
      throw new Error('Map element is not defined');
    }

    new Map({
      container: this.mapElement.nativeElement,
      style:
        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
      center: [-74.2, 4.5],
      zoom: 5,
    });
  }
}
