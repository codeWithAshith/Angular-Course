import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get(this.url);
  }

  createPost(post: Post) {
    return this.http.post(this.url, JSON.stringify(post));
  }
}
