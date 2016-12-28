import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';
import { Video } from '../video';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {

  videos: Video[];
  video: Video = {_id: "", id: ""}

  constructor(private videosService: VideosService ) { }

  ngOnInit() {
    this.videosService
    	.getAllVideos().then(videos => this.videos = videos);
	//add error catching
  }

  addVideo(video: Video) {
	console.log("add video clicked: " + video.id);
	this.videosService.addVideo(video)
    	this.videosService
		.getAllVideos().then(videos => this.videos = videos);
		//add error catching
  }
  deleteVideo(video: Video) {
	console.log("delete video with id: " + video._id);
	this.videosService
		.deleteVideo(video)
		.then(res => {
    			this.videosService
				.getAllVideos().then(videos => this.videos = videos);
		});
		//add error catching
  }
}
