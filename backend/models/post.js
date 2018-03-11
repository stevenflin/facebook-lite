var mongoose = require('mongoose');

var post = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: { 
    type: Date, 
    default: Date.now,
    required: true,
  },
});

var Post = mongoose.model('Post', post)

module.exports = Post;