import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  imports: [CommonModule, CounterAloneComponent],
  templateUrl: './alone-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlonePageComponent {}
