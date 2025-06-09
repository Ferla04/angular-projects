import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './full-screen-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullScreenPageComponent {}
