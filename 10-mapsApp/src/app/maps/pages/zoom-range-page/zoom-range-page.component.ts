import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  signal,
  ViewChild,
} from '@angular/core';
import { Map, LngLat } from 'maplibre-gl';

@Component({
  selector: 'maps-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map')
  public mapElement?: ElementRef<HTMLElement>;

  public map?: Map;
  public zoomLevel = signal(10);
  public currentLngLat = signal(
    new LngLat(-74.12895771728677, 4.61637386555978)
  );

  ngAfterViewInit(): void {
    if (!this.mapElement) {
      throw new Error('Map element is not defined');
    }

    this.map = new Map({
      container: this.mapElement.nativeElement,
      style:
        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
      center: this.currentLngLat(),
      zoom: this.zoomLevel(),
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListeners() {
    if (!this.map) {
      throw new Error('Map is not initialized');
    }

    this.map.on('zoom', () => {
      this.zoomLevel.set(this.map!.getZoom() ?? 0);
    });

    this.map.on('zoomend', () => {
      if (this.map!.getZoom() < 18) return;
      this.map!.setZoom(18);
    });

    this.map.on('moveend', () => {
      this.currentLngLat.set(this.map!.getCenter());
    });
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  onZoomChange(value: number) {
    if (!this.map) {
      throw new Error('Map is not initialized');
    }

    this.map.setZoom(value);
  }
}
