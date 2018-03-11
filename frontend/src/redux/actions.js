import {
	LOAD_NEWSFEED
} from './actionTypes';

export const loadNewsfeed = (newsfeed) => ({
	type: LOAD_NEWSFEED,
	newsfeed,
});