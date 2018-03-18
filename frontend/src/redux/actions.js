import {
	LOAD_NEWSFEED,
	LOAD_USER,
	LOAD_PROFILE,
} from './actionTypes';

export const loadNewsfeed = (newsfeed) => ({
	type: LOAD_NEWSFEED,
	newsfeed,
});

export const loadUser = (user) => ({
	type: LOAD_USER,
	user,
});

export const loadProfile = (profile) => ({
	type: LOAD_PROFILE,
	profile,
});