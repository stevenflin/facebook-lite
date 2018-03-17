var CommentsRepository = require('../repositories/CommentsRepository');

const CommentsService = {

	findByPost: (post) => {
		return new Promise((resolve, reject) => {
			CommentsRepository.findByPost(post)
			.then(comments => resolve({success: true, body: comments}))
	  	.catch(error => reject({success: false, error}));
	  });
	},

	create: (comment) => {
		return new Promise((resolve, reject) => {
			CommentsRepository.create(comment)
			.then(comment => resolve({success: true, body: comment}))
			.catch(error => {
				if(error._message === 'User validation failed')
					reject({message: 'Required fields missing'});
			});
		});
	},

}

module.exports = CommentsService;