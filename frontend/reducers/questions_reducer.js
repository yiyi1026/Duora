import merge from 'lodash/merge';
import { combineReducers } from 'redux';
import questionReducer from './question_reducer';
import {
  RECEIVE_SINGLE_QUESTION,
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
    let newState = merge({}, state);
    // console.log(newState);
    switch(action.type) {
      case RECEIVE_ALL_QUESTIONS:
      // case TOGGLE_TODO:
        // return {
        //   ...state,
        //   [action.id]: question(state[action.id], action),
        // };
        // console.log(action.questions);
        action.questions.forEach(question => newState[question.id] = question);
        // console.log(newState);
        return newState;
        // return merge({}, state, { [action.id]: questionReducer(state[action.id], action)});
      //   return state.map(t =>
      //     question(t, action)
      //   );
      default:
        return state;
    }
};


//Should I set initialState here????
// const questionsReducer = (state = {}, action) => {
//   let nextState;
//   Object.freeze(state);
//   console.log(state);
//   switch(action.type) {
//     case RECEIVE_ALL_QUESTIONS:
//       nextState = merge({}, state);
//       console.log(action);
//       action.questions.forEach(question => nextState[question.id] = question);
//       return nextState;
//     case RECEIVE_SINGLE_QUESTION:
//     // console.log(action);
//       return merge({}, state, { [action.question.id]: action.question });
//     case REMOVE_QUESTION:
//       nextState = merge({}, state);
//       delete nextState[action.question.id]
//       return nextState
//     default:
//       return state;
//   }
// };

const allIdsReducer = (state = [], action) => {
  Object.freeze(state);
  // console.log(action);
  let newState = merge([], state);
  switch (action.type) {
    case RECEIVE_SINGLE_QUESTION:
      return [...state, action.question.id];
    case RECEIVE_ALL_QUESTIONS:
      action.questions.forEach(question => newState = [...newState, question.id]);
      // console.log(newState);
      return newState;
    default:
      return state;
  }
};

const questionsReducer = combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer
  // ,question: questionReducyer
});
export default questionsReducer;
