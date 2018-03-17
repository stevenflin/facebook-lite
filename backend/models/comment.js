var mongoose = require('mongoose');

var comment = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  date: { 
    type: Date, 
    default: Date.now,
    required: true,
  },
});

var Comment = mongoose.model('Comment', comment)

module.exports = Comment;