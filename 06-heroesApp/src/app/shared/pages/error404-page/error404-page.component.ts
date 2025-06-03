import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error404-page',
  templateUrl: './error404-page.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404PageComponent {}
