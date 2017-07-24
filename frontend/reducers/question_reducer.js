import merge from 'lodash/merge';
import { combineReducers } from 'redux';
import {
  RECEIVE_SINGLE_QUESTION
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
    // console.log(newState);
    switch(action.type) {
      case RECEIVE_SINGLE_QUESTION:
        newState[action.question.id] = action.question;
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
    case RECEIVE_SINGLE_QUESTION:
      let question_id = action.question.id;
      return [question_id];
    default:
      return state;
  }
};

const questionReducer = combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer
});
export default questionReducer;
