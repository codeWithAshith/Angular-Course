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
    this.postService.getPost().subscribe((response) => {
      this.posts = response;
    });
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
