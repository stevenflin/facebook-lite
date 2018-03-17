// import axios from 'axios';

export const checkIfUsernameExists = (username) => {
	return dispatch => {
		return fetch(`${process.env.REACT_APP_API_URL}/users/usernames/${username}`, {
			method: 'GET',
	    headers: {
	      'Content-Type': 'application/json'
	    },
		});
	};
};

export const saveUser = (user) => {
	return dispatch => {
		return fetch(`${process.env.REACT_APP_API_URL}/users/new`, {
  		method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
  	});
	};
};

export const logIn = (username, password) => {
	return dispatch => {
		return fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
  		method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password}),
  	})
  };
};

export const getNewsfeed = (userId) => {
	console.log('hi')
	return dispatch => {
		return fetch(`${process.env.REACT_APP_API_URL}/posts`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
	};
};

export const post = (content) => {
	return dispatch => {
		return fetch(`${process.env.REACT_APP_API_URL}/posts/new`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(content),
		})
	};
};

export const comment = (content) => {
	return dispatch => {
		return fetch(`${process.env.REACT_APP_API_URL}/comments/new`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(content),
		})
	};
};

export const getComments = (postId) => {
	return dispatch => {
		return fetch(`${process.env.REACT_APP_API_URL}/comments/post/${postId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
	};
};