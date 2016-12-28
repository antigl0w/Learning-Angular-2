import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  post: Post = { _id: "" ,name: "", comment: "" };

  constructor(private postsService: PostsService) { }

  private updatePosts() {
	this.postsService
    		.getAllPosts().then(posts => this.posts = posts);
		//add error catching
  }

  ngOnInit() {
	  this.updatePosts();
  }

  addPost(post, Post) {
  	console.log("add post clicked: " + post.name);
	this.postsService.addPost(post)
	this.updatePosts();
  }

  deletePost(post: Post) {
  	console.log("delete post with id: " + post._id);
	this.postsService
		.deletePost(post)
		.then(res => {
			this.updatePosts();
		});
  }
}
