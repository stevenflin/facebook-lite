import { combineReducers } from 'redux';
import {
	LOAD_NEWSFEED,
	LOAD_USER,
	LOAD_PROFILE,
	LOAD_FRIENDS,
	LOAD_NEXT_TEN,
	ADD_CHAT_BOX,
	REMOVE_CHAT_BOX,
	TOGGLE_CHAT,
} from './actionTypes';

const initialState = {
	newsfeed: [],
	user: {
		firstName: '',
		lastName: '',
	},
	friends: [],
	profile: {},
	chats: [],
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

function chatsReducer(state = initialState.chats, action) {
	switch (action.type) {
		case ADD_CHAT_BOX:
			return state.concat(action.user);
		case REMOVE_CHAT_BOX:
			let returnObj = state.slice(0,action.index).concat(state.slice(action.index+1));
			for(let i = action.index; i < returnObj.length; i++) {
				returnObj[i].index = i;
			}
			return returnObj;
		case TOGGLE_CHAT:
			let chat = Object.assign({}, state[action.index], {open: !state[action.index].open})
			return state.slice(0,action.index).concat(chat).concat(state.slice(action.index+1));
		default:
			return state;
	}
}

const reducers = combineReducers({
	newsfeed: newsfeedReducer,
	user: userReducer,
	profile: profileReducer,
	friends: friendsReducer,
	chats: chatsReducer,
});

export default reducers;