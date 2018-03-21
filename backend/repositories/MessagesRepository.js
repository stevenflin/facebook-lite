var Message = require('../models/message');

const MessagesRepository = {

	findByUser: (userId) => {
		return new Promise((resolve, reject) => {
			Message.find({$or: [{to: userId}, {from: userId}]})
			.sort('-date')
			.limit(20)
			.exec((error, messages) => {
				if(error) reject(error);
				else resolve(messages);
			});
		});
	},

	create: (message) => {
		return new Promise((resolve, reject) => {
			new Message(message).save((error, message) => {
		  	if(error) reject(error);
	  		else resolve(message);		
			});
		});
	},

}

module.exports = MessagesRepository;