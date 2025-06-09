import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniMapComponent {}
