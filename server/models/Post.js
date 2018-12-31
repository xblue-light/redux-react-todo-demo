const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 25
  },
  startDate: {
    type: String
 },
 firstName: {
   type: String
 },
  body: {
    type: String,
    maxlength: 150
  }
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);