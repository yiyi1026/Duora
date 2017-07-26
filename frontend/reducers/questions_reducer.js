import merge from 'lodash/merge';
import {combineReducers} from 'redux';
import {
  RECEIVE_SINGLE_QUESTION,
  RECEIVE_ALL_QUESTIONS,
  REMOVE_QUESTION,
  RECEIVE_SEARCHED_QUESTIONS
} from '../actions/question_actions';
import questionReducer from './question_reducer';

const initialState = {
  byId: {},
  allIds: [],
  // questions: {
  //   answersIds: []
  //
  // },
  errors: []
};
// const byIdReducer = (state = {initialState}, action) => {
const byIdReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  let newQuestion;
  // console.log(action);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return action.questions;
    case RECEIVE_SINGLE_QUESTION:
      newState = merge({}, state);
      // console.log(state);
      // console.log(newState);
      // nestState[action.question.id]
      return merge({}, state, {[action.question.id]: action.question})
      // console.log(action);
      //action here should be {id: question} type
      // return action.question;
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
      // Object.keys(action.questions).forEach(id => allIds.push(id));
      Object.keys(action.questions).forEach(id => allIds.push(parseInt(id)));
      return allIds;
    case RECEIVE_SINGLE_QUESTION:
      // console.log(action);
      let id = action.question.id;
      if (newState.includes(id)){
        return state;
      }
      console.log('single');
      return [...state, action.question.id];
    case REMOVE_QUESTION:
    // needs modification;
      idx = newState.indexOf(action.question.id);
      newState.splice(idx, 1);
      return newState;
    default:
      return state;
  }
};

const searchIdsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHED_QUESTIONS:
      return action.searchedQuestions.searchIds;
    default:
      return state;
  }
};

const questionsReducer = combineReducers({
  // bySearch: bySearchReducer
  byId: byIdReducer,
  allIds: allIdsReducer,
  currentQuestion: questionReducer,
  searchIds: searchIdsReducer
});
export default questionsReducer;
