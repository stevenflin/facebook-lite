import { combineReducers } from 'redux';
import {
	LOAD_NEWSFEED,
	LOAD_USER,
} from './actionTypes';

const initialState = {
	newsfeed: [],
	user: {
		firstName: '',
		lastName: '',
	},
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
    default:
      return state;
  };
};

const reducers = combineReducers({
	newsfeed: newsfeedReducer,
	user: userReducer,
});

export default reducers;