import merge from 'lodash/merge';
import {combineReducers} from 'redux';
import {
  RECEIVE_SINGLE_ANSWER,
  REMOVE_ANSWER, RECEIVE_ALL_ANSWERS
} from '../actions/answer_actions';

const defaultState = {
  byId: {},
  allIds: [],
  currentAnswer: null,
  errors: []
};

const byIdReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_ANSWERS:
      return action.answers;
    case RECEIVE_SINGLE_ANSWER:
      return merge({}, state, {[action.answer.id]: action.answer})
    case REMOVE_ANSWER:
      let nextState = merge({}, state);
      delete nextState[action.answer.id];
      return nextState;
    default:
      return state;
  }
};

const allIdsReducer = (state = [], action) => {
  Object.freeze(state);

  let allIds = merge([], state);
  switch (action.type) {
    case RECEIVE_ALL_ANSWERS:
      allIds = [];
      Object.keys(action.answers).forEach( (id) => allIds.push(id));
      return allIds;
    case RECEIVE_SINGLE_ANSWER:
      let id = action.answer.id;
      if (allIds.includes(id)){
        return state;
      }
      return [...state, action.answer.id];
    case REMOVE_ANSWER:
      idx = allIds.indexOf(action.answer.id);
      allIds.splice(idx, 1);
      return allIds;
    default:
      return state;
  }
};

const answerReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SINGLE_ANSWER:
      return action.answer.id;
    case REMOVE_ANSWER:
      return null;
    default:
      return state;
  }
};

const answersReducer = combineReducers(
  {
    byId: byIdReducer,
    allIds: allIdsReducer,
    currentAnswer: answerReducer
  }
);
export default answersReducer;
