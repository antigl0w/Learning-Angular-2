const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/videos');
var db = mongoose.connection;
//test our db
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('db connected!!');
});

var videoSchema = mongoose.Schema({
	id: String
});

var postSchema = mongoose.Schema({
	name: String,
	comment: String,
	date: { type: Date, default: Date.now }
});

var Video = mongoose.model('Video', videoSchema);
var Post = mongoose.model('Post', postSchema);

//var vid1 = new Video({id: '123asd'})
//vid1.save()

router.get('/', (req, res) => {
	res.send('api works');
});

router.get('/posts', (req, res) => {
	Post.find(function (err, posts) {
		if (err) res.status(500).send(err);
		res.status(200).json(posts)
	});
});
router.post('/addPost', (req, res) => {
	console.log("trying to add post");
	console.log(req.body);	
	delete req.body._id;
	var addedPost = new Post(req.body)
		.save(error => {
			if (error) {
				console.log(error);
				res.status(500).send(error)
			} else {
				console.log("added post");
				res.status(200).send("success");
			}
		});
});

router.delete('/deletePost/:postid', (req, res) => {
	console.log("trying to delete post");
	console.log(req.params.postid);
	Post.remove({ _id: req.params.postid }, function(err) {
		if (!err) {
			res.status(200).send("success");
		} else {
			res.status(500).send(err);
		}
	});
});

router.get('/videos', (req, res) => {
	console.log("get videos called");
	Video.find(function (err, videos) {
		if (err) res.status(500).send(err);
		res.status(200).json(videos);
	});
});

router.post('/addVideo', (req, res) => {
	console.log("trying to add video");
	console.log(req.body);
	delete req.body._id;
	var addedVideo = new Video(req.body)
		.save(error => {
			if(error) {
				res.status(500).send(error)
			} else {
				console.log("added video");
				res.status(200).send("success");
			}
		});		
});

router.delete('/deleteVideo/:videoid', (req, res) => {
	console.log("trying to delete video");
	console.log(req.params.videoid);
	Video.remove({ _id: req.params.videoid }, function(err) {
		if (!err) {
			res.status(200).send("success");
		} else {
			res.status(500).send(err);
		}
	});
});

module.exports = router;
