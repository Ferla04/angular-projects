import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  public isProductVisible = false;
  public productPrice = 100;

  constructor() {
    console.log('ProductComponent: constructor');
  }

  ngOnChanges() {
    console.log('ProductComponent: ngOnChanges');
  }

  ngOnInit() {
    console.log('ProductComponent: ngOnInit');
  }

  ngDoCheck() {
    console.log('ProductComponent: ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ProductComponent: ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ProductComponent: ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ProductComponent: ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ProductComponent: ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ProductComponent: ngOnDestroy');
  }

  increasePrice() {
    this.productPrice += 1;
  }
}
