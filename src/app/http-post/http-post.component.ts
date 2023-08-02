import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-http-post',
  templateUrl: './http-post.component.html',
  styleUrls: ['./http-post.component.css'],
})
export class HttpPostComponent {
  posts: any = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPost().subscribe((response) => {
      this.posts = response;
    });
  }

  addPost(post: HTMLInputElement) {}
  removePost(post: HTMLInputElement) {}
}
