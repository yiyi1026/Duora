import merge from 'lodash/merge';
import {combineReducers} from 'redux';
import {RECEIVE_ALL_QUESTIONS, REMOVE_QUESTION, RECEIVE_SINGLE_QUESTION} from '../actions/question_actions';

const initialState = {
  questions: {
    answersIds: []

  },
  errors: []
};

const byIdReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  let newQuestion;
  // console.log(action);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
    // console.log(action);
      // case TOGGLE_TODO:
      // return {
      //   ...state,
      //   [action.id]: question(state[action.id], action),
      // };

      // console.log(newState);
      return action.questions;
    case RECEIVE_SINGLE_QUESTION:
      // console.log(action);
        return action.questions;
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
      let allIds = [];
      Object.keys(action.questions).forEach(id => allIds.push(parseInt(id)));
      // console.log(allIds);
      // action.questions.forEach(question => newState.push(question.id));
      return allIds;
    case RECEIVE_SINGLE_QUESTION:
      // console.log(action);
      return [action.questions.id];
      // console.log('single');
    case REMOVE_QUESTION:
    // needs modification;
      return state;
      // idx = newState.indexOf(action.id);
      // return newState.splice(idx, 1);
    default:
      return state;
  }
};

const questionsReducer = combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer
});
export default questionsReducer;
