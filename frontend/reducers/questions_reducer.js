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
      return action.questions;
    case RECEIVE_SINGLE_QUESTION:
      newState = merge({}, state);
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
    case RECEIVE_ALL_QUESTIONS:
      return Object.keys(action.questions).map(id => parseInt(id));
    case RECEIVE_SINGLE_QUESTION:
      let id = action.question.id;
      if (allIds.includes(id)){
        return state;
      }else{
        return [...state, action.question.id];
      }
<<<<<<< HEAD
=======
      console.log('single');
      return [...state, action.question.id];
>>>>>>> ae2a4b6372f54eec504909d692cb97e9731be2f4
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
      return action.searchedQuestions.searchIds;
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
