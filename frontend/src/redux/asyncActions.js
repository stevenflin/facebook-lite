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