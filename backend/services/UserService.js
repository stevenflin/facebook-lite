var UserRepository = require('../repositories/UserRepository');

const UserService = {

	findAll: () => {
		return new Promise((resolve, reject) => {
			UserRepository.findAll()
			.then(user => resolve({success: true, body: user}))
	  	.catch(error => reject({success: false, error}));
	  });
	},

	checkIfUsernameExists: (username) => {
		return new Promise((resolve, reject) => {
			UserRepository.findByUsername(username)
			.then(user => {
				(user) ? resolve({success: true, exists: true}) : resolve({success: true, exists: false});
			})
			.catch(error => reject({success: false, error}));
		})
	},

	login: (username, password) => {
		return new Promise((resolve, reject) => {
			UserRepository.findByUsernameAndPassword(username, password)
			.then(user => {
				(user) 
				? resolve({success: true, body: user}) 
				: resolve({
					success: false, 
					error: { message: 'Incorrect username or password' },
					credentials: { username, password },
				});
			})
			.catch(error => reject({success: false, error}));
		});
	},

	create: (user) => {
		return new Promise((resolve, reject) => {
			UserRepository.create(user)
			.then(user => resolve({success: true, body: user}))
			.catch(error => {
				if(error._message === 'User validation failed')
					reject({message: 'Required fields missing'});
			});
		});
	},

}

module.exports = UserService;