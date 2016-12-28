import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  getAllPosts() {
	return this.http.get('/api/posts')
		.map(res => res.json());
  }
  /*
  addPost(post: Post) {
  	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers});
	console.log("attempting to post a new post from user " + postObj.name);
	return this.http.post('/api/addPost', JSON.stringify(postObj), options)
		.subscribe();
  }
  deletePost(post: Post) {
  	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers});
	console.log("attempting to delete post id: " + postid);
	return this.http.delete('/api/deletePost/' + postid, options)
		.subscribe();
  }
 */
}
