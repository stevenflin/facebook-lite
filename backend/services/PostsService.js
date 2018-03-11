var PostsRepository = require('../repositories/PostsRepository');

const PostsService = {

	findAll: () => {
		return new Promise((resolve, reject) => {
			PostsRepository.findAll()
			.then(posts => resolve({success: true, body: posts}))
	  	.catch(error => reject({success: false, error}));
	  });
	},

	create: (post) => {
		return new Promise((resolve, reject) => {
			PostsRepository.create(post)
			.then(post => resolve({success: true, body: post}))
			.catch(error => {
				if(error._message === 'User validation failed')
					reject({message: 'Required fields missing'});
			});
		});
	},

}

module.exports = PostsService;