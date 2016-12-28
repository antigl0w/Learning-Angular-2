import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Post } from './post';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  getAllPosts(): Promise<Post[]> {
	return this.http
		.get('/api/posts')
		.toPromise()
		.then(response => response.json() as Post[]);
		//add error catching
  }
  addPost(post: Post): Promise<Post> {
	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });
	console.log("attempting to post new post by user: " + post.name);
	return this.http
		.post('/api/addPost', JSON.stringify(post), options)
		.toPromise()
		.then(res => res);
		//add error catching
  }
  deletePost(post: Post): Promise<Response> {
	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });
	console.log("attempting to delete post with id: " + post._id);
	return this.http
		.delete('/api/deletePost/' + post._id, options)
		.toPromise();
		//add error catching
  }

}
