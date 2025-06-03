import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input() src!: string;
  @Input() alt = 'No name';

  hasLoaded = false;

  ngOnInit(): void {
    if (!this.src) {
      throw new Error('src is required');
    }
  }

  onLoad(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }
}
