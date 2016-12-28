import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { VideosComponent } from './videos/videos.component';
import { SafePipe } from './safe.pipe';
import { VideosService } from './videos.service';

const ROUTES = [
	{
	path: '',
	redirectTo: 'posts',
	pathMatch: 'full'
	},
	{
	path: 'posts',
	component: VideosComponent
	}	
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    VideosComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService, VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
