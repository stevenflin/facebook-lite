import { combineReducers } from 'redux';

function placeholder(state = [], action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  };
};

const reducers = combineReducers({placeholder});

export default reducers;