import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Video } from './video';

@Injectable()
export class VideosService {

  constructor(private http: Http) { }

  getAllVideos(): Promise<Video[]> {
	console.log("get all videos called");
	return this.http
		.get('/api/videos')
		.toPromise()
		.then(response => response.json() as Video[]);
		//add error catching
  }
  addVideo(video: Video): Promise<Video> {
	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });
	console.log("attempting to post video id: " + video.id);
	return this.http
		.post('/api/addVideo', JSON.stringify({"id": video.id}), options)
		.toPromise()
		.then(res => res);
		//add error catching
  }
  deleteVideo(video: Video): Promise<Response> {
	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });
	console.log("attempting to delete video with id: " + video._id);
	return this.http
		.delete('/api/deleteVideo/' + video._id, options)
		.toPromise();
		//add error catching
  }
}
