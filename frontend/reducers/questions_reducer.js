import merge from 'lodash/merge';
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
}

//Should I set initialState here????
const questionsReducer = (state = {}, action) => {
  let nextState;
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_QUESTIONS:
      nextState = merge({}, state);
      console.log(action);
      action.questions.forEach(question => nextState[question.id] = question);
      return nextState;
    case RECEIVE_SINGLE_QUESTION:
      console.log(action);  
      return merge({}, state, { [action.question.id]: action.question });
    case REMOVE_QUESTION:
      nextState = merge({}, state);
      delete nextState[action.question.id]
      return nextState
    default:
      return state;
  }
};
export default questionsReducer;
