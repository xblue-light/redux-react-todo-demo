import express from 'express';
import Post from '../models/Post';
const PostRoute = express.Router();

// Defined store route
PostRoute.route('/add').post(function (req, res) {
  let post = new Post(req.body);
  post.save()
    .then(post => {
      res.status(200).json(post);
      console.log("Added new post via /add route!");
    })
    .catch(err => {
      res.status(400).send("Not able to save to database");
    });
});

// Defined get data(index or listing) route
PostRoute.route('/').get(function (req, res) {
  Post.find(function (err, posts) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(posts);
      console.log("GET all posts via '/' route!");
    }
  });
});

// Defined delete | remove | destroy route
PostRoute.route('/delete/:id').get(function (req, res) {
  Post.findOneAndDelete({_id: req.params.id}, function(err, post){
    if (err) 
      res.json(err);
    else 
      res.json(req.params.id);
      console.log("Deleted post via '/delete/:id' route!");
  });
});

module.exports = PostRoute;