var Comment = require('../models/comment');

const CommentsRepository = {

	findByPost: (post) => {
		return new Promise((resolve, reject) => {
			Comment.find({post})
			.populate('user')
			.exec((error, comments) => {
				if(error) reject(error);
				else resolve(comments);
			});
		});
	},

	create: (comment) => {
		return new Promise((resolve, reject) => {
			new Comment(comment).save((error, comment) => {
		  	if(error) reject(error);
	  		else resolve(comment);		
			});
		});
	},

}

module.exports = CommentsRepository;