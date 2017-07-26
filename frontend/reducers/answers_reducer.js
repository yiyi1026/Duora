import merge from 'lodash/merge';
import {combineReducers} from 'redux';
import {RECEIVE_SINGLE_ANSWER, CREATE_ANSWER, REMOVE_ANSWER, RECEIVE_ALL_ANSWERS} from '../actions/answer_actions';

const initialState = {
  byId: {},
  allIds: [],
  errors: []
};

const byIdReducer = (state = {}, action) => {
  Object.freeze(state);
  // console.log(state);
  let newState = {};
  // console.log(newState);
  switch (action.type) {
    case RECEIVE_ALL_ANSWERS:
      // console.log(action.answers);
      // action.answers.forEach(answer => newState[answer.id] = answer);
      // console.log(newState);
      return action.answers;
    case RECEIVE_SINGLE_ANSWER:
    case CREATE_ANSWER:
    return merge({}, state, {[action.answer.id]: action.answer})
      // newState[action.answer.id] = action.answer;
      // return newState;
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
    case RECEIVE_ALL_ANSWERS:
    let allIds = [];
    // Object.keys(action.questions).forEach(id => allIds.push(id));
    Object.keys(action.answers).forEach(id => allIds.push(parseInt(id)));
    return allIds;
    case RECEIVE_SINGLE_ANSWER:
      let id = action.answer.id;
      if (newState.includes(id)){
        return state;
      }
      return [action.answer.id];
    case CREATE_ANSWER:
      return [
        ...state,
        action.answer.id
      ];
    case REMOVE_ANSWER:
      idx = newState.indexOf(action.answer.id);
      newState.splice(idx, 1);
      return newState;
    default:
      return state;
  }
};
const defaultState = {
  currentAnswer: null
};

const answerReducer = (state=[], action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_SINGLE_ANSWER:
      return merge({}, state, {currentAnswer: action.answer.id});
    case REMOVE_ANSWER:
      return defaultState;
    default:
      return state;
  }

}
const answersReducer = combineReducers({byId: byIdReducer, allIds: allIdsReducer, currentAnswer: answerReducer});
export default answersReducer;
