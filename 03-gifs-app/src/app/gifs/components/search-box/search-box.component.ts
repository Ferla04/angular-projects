import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      class="form-control"
      type="text"
      placeholder="Buscar GIFs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput') txtTagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag() {
    const newTag = this.txtTagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.txtTagInput.nativeElement.value = '';
  }
}
