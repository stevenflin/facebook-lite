import {
	LOAD_NEWSFEED,
	LOAD_USER,
	LOAD_PROFILE,
	LOAD_FRIENDS,
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

export const loadFriends = (friends) => ({
	type: LOAD_FRIENDS,
	friends,
});