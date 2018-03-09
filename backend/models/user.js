var mongoose = require('mongoose');

var user = new mongoose.Schema({
  firstName: {
		type: String,
    required: true,
  },
  lastName: {
		type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

var User = mongoose.model('User', user)

module.exports = User;