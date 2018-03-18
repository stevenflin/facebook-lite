import {
	LOAD_NEWSFEED,
	LOAD_USER,
	LOAD_PROFILE,
	LOAD_FRIENDS,
	LOAD_NEXT_TEN,
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

export const loadNext10 = (posts) => ({
	type: LOAD_NEXT_TEN,
	posts,
});