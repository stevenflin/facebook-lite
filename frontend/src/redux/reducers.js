import { combineReducers } from 'redux';
import {
	LOAD_NEWSFEED
} from './actionTypes';

const initialState = {
	newsfeed: [],
}

function newsfeedReducer(state = initialState.newsfeed, action) {
  switch (action.type) {
    case LOAD_NEWSFEED:
      return action.newsfeed;
    default:
      return state;
  };
};

const reducers = combineReducers({
	newsfeed: newsfeedReducer
});

export default reducers;