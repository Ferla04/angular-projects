import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;
  public interval$?: Subscription

  ngOnInit(): void {
    console.log('%cPriceComponent: ngOnInit', "color: yellow; font-weight: bold;");
    this.interval$ = interval(2000).subscribe((value) => console.log(`Trick: ${value}`))
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%cPriceComponent:', "color: yellow; font-weight: bold;", { changes });
  }

  ngOnDestroy(): void {
    console.log('%cPriceComponent: ngOnDestroy', "color: yellow; font-weight: bold;");
    this.interval$?.unsubscribe();
  }
}
