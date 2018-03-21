var Message = require('../models/message');

const MessagesRepository = {

	findByUser: (userId1, userId2) => {
		return new Promise((resolve, reject) => {
			Message.find({
				$or: [{
					$and: [{to: userId1}, {from: userId2}]
				}, {
					$and: [{to: userId2}, {from: userId1}]
				}]
			})
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