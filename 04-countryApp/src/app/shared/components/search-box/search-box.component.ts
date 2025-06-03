import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer = new Subject<string>();
  private debouncerDescription?: Subscription;

  @Input() placeholder = 'Buscar...';
  @Input() initialValue = '';
  @Output()
  onValue = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();
  // @ViewChild('txtInput') txtInput!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.debouncerDescription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.onDebounce.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerDescription?.unsubscribe();
  }

  onSearch(country: string): void {
    // const country = this.txtInput.nativeElement.value;
    this.onValue.emit(country);
  }

  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);
  }
}
