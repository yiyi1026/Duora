import merge from 'lodash/merge';
import { combineReducers } from 'redux';
import {
  RECEIVE_SINGLE_ANSWER,
  CREATE_ANSWER,
  REMOVE_ANSWER
} from '../actions/answer_actions';

const initialState = {
  answer: {
    commentsIds:[]

  },
  errors: []
};

const byIdReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};
    // console.log(newState);
    switch(action.type) {
      case RECEIVE_SINGLE_QUESTION:
      case CREATE_ANSWER:
        newState[action.answer.id] = action.answer;
        return newState;
      case REMOVE_ANSWER:
        nextState = merge({}, state);
        delete nextState[action.answer.id];
        return nextState;
      default:
        return state;
    }
};

const allIdsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = merge([], state);
  switch (action.type) {
    case RECEIVE_SINGLE_ANSWER:
      return [action.answer.id];
    case CREATE_ANSWER:
      return [...state, action.answer.id];
    case REMOVE_ANSWER:
      idx = newState.indexOf(action.answer.id);
      return newState.splice(idx, 1);
    default:
      return state;
  }
};

const answersReducer = combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer
});
export default answersReducer;
