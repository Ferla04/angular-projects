import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  // imports: [CommonModule],
  templateUrl: './alone-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlonePageComponent {}
