var mongoose = require('mongoose');

var message = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  from: {
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

var Message = mongoose.model('Message', message)

module.exports = Message;