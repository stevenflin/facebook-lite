var Post = require('../models/post');

const PostsRepository = {

	findAll: () => {
		return new Promise((resolve, reject) => {
			Post.find({})
			.limit(10)
			.populate('user')
			.sort('-date')
			.exec((error, posts) => {
				if(error) reject(error);
				else resolve(posts);
			});
		});
	},

	findNext10: (date) => {
		return new Promise((resolve, reject) => {
			Post.find({date: {$lt: date}})
			.limit(10)
			.populate('user')
			.sort('-date')
			.exec((error,posts) => {
				if(error) reject(error);
				else resolve(posts);
			});
		});
	},

	create: (post) => {
		return new Promise((resolve, reject) => {
			new Post(post).save((error, post) => {
		  	if(error) reject(error);
	  		else resolve(post);		
			});
		});
	},

}

module.exports = PostsRepository;