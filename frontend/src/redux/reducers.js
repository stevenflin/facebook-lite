import { combineReducers } from 'redux';
import {
	LOAD_NEWSFEED,
	LOAD_USER,
	LOAD_PROFILE,
	LOAD_FRIENDS,
	LOAD_NEXT_TEN,
} from './actionTypes';

const initialState = {
	newsfeed: [],
	user: {
		firstName: '',
		lastName: '',
	},
	friends: [],
	profile: {

	},
};

function friendsReducer(state = initialState.friends, action) {
	switch (action.type) {
		case LOAD_FRIENDS:
			return action.friends;
		default:
			return state;
	};
};

function profileReducer(state = initialState.profile, action) {
	switch (action.type) {
		case LOAD_PROFILE:
			return action.profile;
		default:
			return state;
	};
};

function userReducer(state = initialState.user, action) {
	switch (action.type) {
		case LOAD_USER:
			return action.user;
		default:
			return state;
	};
};

function newsfeedReducer(state = initialState.newsfeed, action) {
  switch (action.type) {
    case LOAD_NEWSFEED:
      return action.newsfeed;
    case LOAD_NEXT_TEN:
    	return state.concat(action.posts);
    default:
      return state;
  };
};

const reducers = combineReducers({
	newsfeed: newsfeedReducer,
	user: userReducer,
	profile: profileReducer,
	friends: friendsReducer,
});

export default reducers;