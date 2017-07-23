import merge from 'lodash/merge';
import { combineReducers } from 'redux';
import {
  RECEIVE_SEARCHED_QUESTIONS
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
      case RECEIVE_SEARCHED_QUESTIONS:
        action.searchedQuestions.forEach(question => newState[question.id] = question);
        return newState;
      default:
        return state;
    }
};

const allIdsReducer = (state = [], action) => {
  Object.freeze(state);
  // console.log(action);
  let newState = merge([], state);
  switch (action.type) {
    case RECEIVE_SEARCHED_QUESTIONS:
      newState = [];
      action.searchedQuestions.forEach(question => newState.push(question.id));
      return newState;
    default:
      return state;
  }
};

const searchesReducer = combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer
});
export default searchesReducer;
