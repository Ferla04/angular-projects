import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _gifsList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private _apiKey: string = 'k0WUNnR1P5buYYsugmhELhe7uPLW7L17';
  private _serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    this.searchTag(this._tagsHistory[0] ?? '');
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  get gifsList(): Gif[] {
    return [...this._gifsList];
  }

  private organizeHistory(tag: string): void {
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    const history = localStorage.getItem('history');
    if (history) {
      this._tagsHistory = JSON.parse(history);
    }
  }

  searchTag(tag: string): void {
    tag = tag.trim().toLocaleLowerCase();
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('q', tag)
      .set('limit', '10');

    this.http
      .get<SearchResponse>(`${this._serviceUrl}/search`, { params })
      .subscribe((response) => {
        this._gifsList = response.data;
      });
  }
}
