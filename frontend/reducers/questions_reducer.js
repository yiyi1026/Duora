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
  let nextState = merge({}, state.byId);
  // console.log(action);
  // console.log(action);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
    case RECEIVE_SEARCHED_QUESTIONS:
      //return {id:object}
      let a = merge({}, nextState, action.questions);
      return a;
    case RECEIVE_SINGLE_QUESTION:
      //return {id:object}
      console.log(state);
      console.log({byId: {[action.question.id]: action.question}});
      return merge({}, state, {byId: {[action.question.id]: action.question}});
    case REMOVE_QUESTION:
    // is this right?
      delete nextState.byId[action.question.id];
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
    console.log(state);
    console.log(action);
      Object.keys(action.questions).forEach(
        (id) => {
          if (!allIds.includes(id)){
            allIds.push(id);}
          });
      // console.log(allIds);
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
      let idx = allIds.indexOf(action.question.id);
      allIds.splice(idx, 1);
      return allIds;
    default:
      return state;
  }
};

const searchIdsReducer = (state = [], action) => {
  Object.freeze(state);

  let searchIds = [];
  switch (action.type) {
    case RECEIVE_SEARCHED_QUESTIONS:
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
  byId: byIdReducer,
  allIds: allIdsReducer,
  currentQuestion: questionReducer,
  searchIds: searchIdsReducer
});
export default questionsReducer;
