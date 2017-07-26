import merge from 'lodash/merge';
import {combineReducers} from 'redux';
import {
  RECEIVE_SINGLE_QUESTION,
  RECEIVE_ALL_QUESTIONS,
  REMOVE_QUESTION,
  RECEIVE_SEARCHED_QUESTIONS
} from '../actions/question_actions';

const defaultState = {
  byId: {},
  allIds: [],
  searchIds: [],
  errors: [],
  currentQuestion: null
};

const byIdReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = {};
  let newQuestion;
  // console.log(action);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
    case RECEIVE_SEARCHED_QUESTIONS:
    // console.log(action.questions.byId);
      return action.questions;
    case RECEIVE_SINGLE_QUESTION:
      newState = merge({}, state);
      console.log(action.question);
      return merge({}, state, {[action.question.id]: action.question})
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

  let allIds = merge([], state);
  switch (action.type) {
    case RECEIVE_SEARCHED_QUESTIONS:
    case RECEIVE_ALL_QUESTIONS:
    // console.log(Object.keys(action.questions));
      allIds = [];
      Object.keys(action.questions).forEach( (id) => allIds.push(id));
      return allIds;
    case RECEIVE_SINGLE_QUESTION:
      let id = action.question.id;
      if (allIds.includes(id)){
        return state;
      }else{
        return [...state, action.question.id];
      }
    case REMOVE_QUESTION:
    // needs modification;
      idx = allIds.indexOf(action.question.id);
      allIds.splice(idx, 1);
      return allIds;
    default:
      return state;
  }
};

const searchIdsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCHED_QUESTIONS:
      let searchIds = [];
      Object.keys(action.questions).forEach( (id) => searchIds.push(id));
      return searchIds;
    default:
      return state;
  }
};

const questionReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SINGLE_QUESTION:
      return action.question.id;
    case REMOVE_QUESTION:
      return null;
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
