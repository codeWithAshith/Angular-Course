import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get(this.url + '/posts');
  }
}
