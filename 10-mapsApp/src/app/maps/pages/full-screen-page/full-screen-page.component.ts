import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  type ElementRef,
} from '@angular/core';
import { Map } from 'maplibre-gl';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullScreenPageComponent implements AfterViewInit {
  @ViewChild('map')
  public mapElement?: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    if (!this.mapElement) {
      throw new Error('Map element is not defined');
    }

    new Map({
      container: this.mapElement?.nativeElement,
      style:
        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
      center: [-74.2, 4.5],
      zoom: 5,
    });
  }
}
