import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from 'src/app/interfaces/post.interface';

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

  addPost(input: HTMLInputElement) {
    const post: Post = { title: input.value };

    this.postService.createPost(post).subscribe((response) => {
      console.log(response);
      post.id = (response as Post)?.id;
      this.posts.push(post);
    });
  }
  removePost(post: HTMLInputElement) {}
}
