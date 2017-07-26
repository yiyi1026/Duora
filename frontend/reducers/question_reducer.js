import merge from 'lodash/merge';
// import {combineReducers} from 'redux';
import {RECEIVE_SINGLE_QUESTION, DELETE_QUESTION} from '../actions/question_actions';
// import answersReducer from './answers_reducer';

const defaultState = null;

// const byIdReducer = (state = {}, action) => {
//   Object.freeze(state);
//   let newState = {};
//   // console.log(state);
//   switch (action.type) {
//     case RECEIVE_SINGLE_QUESTION:
//     // newState = merge({}, state);
//     console.log({[action.question.id]: action.question});
//       return {[action.question.id]: action.question};
//       // return merge(newState, {answers: action.answers});
//     default:
//       return state;
//   }
// };

const questionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  // console.log(action.type);
  switch(action.type){
    case RECEIVE_SINGLE_QUESTION:
      // console.log(action);
      // console.log(state);
      return action.question.id;
    case DELETE_QUESTION:
      // newState = merge({}, state, {currentQuestion: null});
      // return newState;
      return defaultState;
    default:
      return state;
  }

}


// const allIdsReducer = (state = [], action) => {
//   Object.freeze(state);
//   console.log(action);
//   let newState = merge([], state);
//   switch (action.type) {
//     case RECEIVE_SINGLE_QUESTION:
//     console.log(action);
//       let question_id = action.id;
//       return [question_id];
//     default:
//       return state;
//   }
// };
//
// const questionReducer = combineReducers({byId: byIdReducer, allIds: allIdsReducer});
// export default questionReducer;
// import merge from 'lodash/merge';
// import {combineReducers} from 'redux';
// import {RECEIVE_SINGLE_QUESTION} from '../actions/question_actions';
// import answersReducer from './answers_reducer';
//
// const initialState = {
//   question: {
//     answersIds: []
//
//   },
//   errors: []
// };
//
// const byIdReducer = (state = [], action) => {
//   Object.freeze(state);
//   let newState = {};
//   // console.log(state);
//   switch (action.type) {
//     case RECEIVE_SINGLE_QUESTION:
//     console.log(action);
//     // console.log(action.id);
//     // newState = merge({}, state);
//     // console.log({[action.question.id]: action.question});
//       return {[action.question.id]: action.question};
//       // return [action.id];
//       // return merge(newState, {answers: action.answers});
//     default:
//       return state;
//   }
// };
//
// const allIdsReducer = (state = [], action) => {
//   Object.freeze(state);
//   // console.log(action);
//   let newState = merge([], state);
//   switch (action.type) {
//     case RECEIVE_SINGLE_QUESTION:
//     console.log(action);
//       let question_id = action.id;
//       return [question_id];
//     default:
//       return state;
//   }
// };
// const questionReducer = combineReducers({byId: byIdReducer});
// const questionReducer = combineReducers({byId: byIdReducer, allIds: allIdsReducer});
export default questionReducer;
