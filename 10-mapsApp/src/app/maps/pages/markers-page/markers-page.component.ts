import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { LngLat, Map, Marker } from 'maplibre-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: [number, number];
}

@Component({
  selector: 'maps-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkersPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') mapElement?: ElementRef<HTMLElement>;
  public map?: Map;
  public markers: MarkerAndColor[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

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

    this.loadMarkers();
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }

  saveMarkers() {
    const plainMarkers: PlainMarker[] = this.markers.map(
      ({ marker, color }) => ({
        color,
        lngLat: marker.getLngLat().toArray(),
      })
    );

    localStorage.setItem('markers', JSON.stringify(plainMarkers));
  }

  loadMarkers() {
    const markersData = localStorage.getItem('markers');
    if (!markersData) return;

    const plainMarkers: PlainMarker[] = JSON.parse(markersData);

    this.markers = plainMarkers.map(({ color, lngLat }) => {
      const marker = new Marker({
        color,
        draggable: true,
      })
        .setLngLat(new LngLat(lngLat[0], lngLat[1]))
        .addTo(this.map!);

      marker.on('dragend', () => this.saveMarkers);

      return { marker, color };
    });
    this.cdr.markForCheck();
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

    this.markers.push({ marker, color });
    this.saveMarkers();

    marker.on('dragend', () => this.saveMarkers);
  }

  deleteMarker(index: number) {
    if (index < 0 || index >= this.markers.length) {
      throw new Error('Index out of bounds');
    }

    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
    this.saveMarkers();
  }

  flyToMarker(marker: Marker) {
    this.map!.flyTo({
      zoom: 14,
      center: marker.getLngLat(),
    });
  }
}
