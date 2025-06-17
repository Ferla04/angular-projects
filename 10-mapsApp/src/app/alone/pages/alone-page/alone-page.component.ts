import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  imports: [CounterAloneComponent],
  templateUrl: './alone-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlonePageComponent {}
