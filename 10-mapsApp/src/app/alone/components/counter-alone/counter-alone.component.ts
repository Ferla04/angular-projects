import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'counter-alone',
  standalone: true,
  templateUrl: './counter-alone.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterAloneComponent {
  public count = 10;
}
