var User = require('../models/user');

const UserRepository = {

	findAll: () => {
		return new Promise((resolve, reject) => {
			User.find({}, (error, users) => {
				if(error) reject(error);
				else resolve(users);
			});
		});
	},

	findById: (userId) => {
		return new Promise((resolve, reject) => {
			User.findById(userId, (error, user) => { 
				if(error) reject(error);
				else resolve(user);
			});
		});
	},

	findByUsername: (username) => {
		return new Promise((resolve, reject) => {
			User.findOne({username}, (error, user) => { 
				if(error) reject(error);
				else resolve(user);
			});
		});
	},

	findByUsernameAndPassword: (username, password) => {
		return new Promise((resolve, reject) => {
			User.findOne({username, password}, (error, user) => {
				if(error) reject(error);
				else resolve(user);
			});
		});
	},

	create: (user) => {
		return new Promise((resolve, reject) => {
			new User(user).save((error, user) => {
		  	if(error) reject(error);
	  		else resolve(user);		
			});
		});
	},

}

module.exports = UserRepository;