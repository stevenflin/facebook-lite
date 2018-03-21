var MessagesRepository = require('../repositories/MessagesRepository');

const MessagesService = {

	findByUser: (userId) => {
		return new Promise((resolve, reject) => {
			MessagesRepository.findByUser(userId)
			.then(messages => resolve({success: true, body: messages}))
	  	.catch(error => reject({success: false, error}));
	  });
	},

	create: (message) => {
		return new Promise((resolve, reject) => {
			MessagesRepository.create(message)
			.then(message => resolve({success: true, body: message}))
			.catch(error => {
				if(error._message === 'User validation failed')
					reject({message: 'Required fields missing'});
			});
		});
	},

}

module.exports = MessagesService;