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
  video: Video = {_id: "", id: ""};

  constructor(private videosService: VideosService ) { }

  private updateVideos() {
	this.videosService
		.getAllVideos().then(videos => this.videos = videos);
		//add error catching
  }

  ngOnInit() {
	this.updateVideos()
  }

  addVideo(video: Video) {
	console.log("add video clicked: " + video.id);
	this.videosService.addVideo(video)
	this.updateVideos()
  }
  deleteVideo(video: Video) {
	console.log("delete video with id: " + video._id);
	this.videosService
		.deleteVideo(video)
		.then(res => {
			this.updateVideos()
		});
  }
}
