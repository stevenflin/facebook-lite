import {
	LOAD_NEWSFEED,
	LOAD_USER,
} from './actionTypes';

export const loadNewsfeed = (newsfeed) => ({
	type: LOAD_NEWSFEED,
	newsfeed,
});

export const loadUser = (user) => ({
	type: LOAD_USER,
	user,
});