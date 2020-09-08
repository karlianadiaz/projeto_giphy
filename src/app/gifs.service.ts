import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {}

  private api_key = 'yP2RrFSFPI6LVuS4evFQw5M09sIH4Y0X';
  private limit = '24';
  private url = 'https://api.giphy.com/v1/gifs/search';

  getGifs(q) {
    let url = `${this.url}?api_key=${this.api_key}&q=${q}&limit=${this.limit}`;
    console.log(url);

    return this.http.get(url);
  }
}
