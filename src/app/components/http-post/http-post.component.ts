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
  title = '';

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPost().subscribe(
      (response) => {
        this.posts = response;
      },
      (error: Response) => {
        // handle expected error such as
        // 1. Not found
        // 2. Bad request
        if (error.status === 404) {
          console.log('Handling expected errors');
          console.log(error);
        } else {
          console.log('Handling unexpected errors');
          console.log(error);
        }
      }
    );
  }

  addPost() {
    const post: Post = { title: this.title };

    this.postService.createPost(post).subscribe((response) => {
      post.id = (response as Post)?.id;
      this.posts.push(post);
      this.title = '';
    });
  }

  editPost(post: Post) {
    this.postService.updatePost(post).subscribe((response) => {
      console.log('edited');
    });
  }

  removePost(post: Post) {
    this.postService.deletePost(post).subscribe((_response) => {
      this.posts = this.posts.filter((p: Post) => p.id !== post.id);
    });
  }
}
