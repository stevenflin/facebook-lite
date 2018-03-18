import axios from 'axios';

import history from '../history';

import { loadNewsfeed } from './actions';

export const checkIfUsernameExists = (username) => {
	return dispatch => axios.get(`${process.env.REACT_APP_API_URL}/users/usernames/${username}`);
};

export const saveUser = (user) => {
	return dispatch => axios.post(`${process.env.REACT_APP_API_URL}/users/new`, user);
};

export const logIn = (username, password) => {
	return dispatch => axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {username, password})
		.then(resp => {
  		if(resp.data.success) history.push(`/newsfeed/${resp.data.body._id}`);
  		else history.push('/login');
  	});;
};

export const fetchNewsfeed = () => {
	return dispatch => axios.get(`${process.env.REACT_APP_API_URL}/posts`)
		.then(resp => dispatch(loadNewsfeed(resp.data.body)));
};

export const post = (content) => {
	return dispatch => axios.post(`${process.env.REACT_APP_API_URL}/posts/new`, content)
		.then(resp => dispatch(fetchNewsfeed()));
};

export const comment = (content) => {
	return dispatch => axios.post(`${process.env.REACT_APP_API_URL}/comments/new`, content);
};

export const fetchComments = (postId) => {
	return dispatch => axios.get(`${process.env.REACT_APP_API_URL}/comments/post/${postId}`);
};

export const fetchUser = (userId) => {
	return dispatch => axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`);
}