import merge from 'lodash/merge';
import { combineReducers } from 'redux';
import {
  RECEIVE_ALL_QUESTIONS,
  REMOVE_QUESTION
} from '../actions/question_actions';

const initialState = {
  question: {
    answersIds:[]

  },
  errors: []
};

const byIdReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};
    let newQuestion;
    // console.log(newState);
    switch(action.type) {
      case RECEIVE_ALL_QUESTIONS:
      // case TOGGLE_TODO:
        // return {
        //   ...state,
        //   [action.id]: question(state[action.id], action),
        // };
        action.questions.forEach(question => newState[question.id] = question);
        // console.log(newState);
        return newState;
      case REMOVE_QUESTION:
        nextState = merge({}, state);
        delete nextState[action.question.id];
        return nextState;
      default:
        return state;
    }
};

const allIdsReducer = (state = [], action) => {
  Object.freeze(state);
  // console.log(action);
  let newState = merge([], state);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      newState = [];
      action.questions.forEach(question => newState.push(question.id));
      return newState;
    case REMOVE_QUESTION:
      idx = newState.indexOf(action.question.id);
      return newState.splice(idx, 1);
    default:
      return state;
  }
};

const questionsReducer = combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer
});
export default questionsReducer;
