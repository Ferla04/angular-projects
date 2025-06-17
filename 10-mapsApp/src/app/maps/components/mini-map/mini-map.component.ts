import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Map, Marker } from 'maplibre-gl';

@Component({
  selector: 'maps-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniMapComponent implements AfterViewInit {
  @Input() lngLat?: [number, number];
  @ViewChild('map') mapElement?: ElementRef<HTMLElement>;
  map?: Map;

  ngAfterViewInit() {
    if (!this.mapElement) throw new Error('Map element is not defined');
    if (!this.lngLat) throw new Error('lngLat input is required');

    this.map = new Map({
      container: this.mapElement?.nativeElement,
      style:
        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
      center: this.lngLat,
      zoom: 15,
      interactive: false,
      attributionControl: false,
    });

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    new Marker({ color }).setLngLat(this.lngLat).addTo(this.map);
  }
}
