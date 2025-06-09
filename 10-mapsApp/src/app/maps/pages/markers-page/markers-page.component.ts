import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { LngLat, Map, Marker } from 'maplibre-gl';

@Component({
  selector: 'maps-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkersPageComponent {
  @ViewChild('map') mapElement?: ElementRef<HTMLElement>;
  public map?: Map;

  ngAfterViewInit(): void {
    if (!this.mapElement) {
      throw new Error('Map element is not defined');
    }

    this.map = new Map({
      container: this.mapElement.nativeElement,
      style:
        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
      center: [-74.08544980151896, 4.678739926116521],
      zoom: 13,
    });
  }

  createMarker() {
    if (!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: LngLat, color: string) {
    if (!this.map) {
      throw new Error('Map is not initialized');
    }

    const marker = new Marker({
      color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);
  }
}
