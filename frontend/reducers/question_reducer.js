import merge from 'lodash/merge';
import {
  RECEIVE_ERRORS,
  RECEIVE_SINGLE_QUESTION,
  RECEIVE_QUESTIONS
} from '../actions/question_actions';

const initialState = {
  question: {
    answersIds:[]

  },
  errors: []
}

const questionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_QUESTION:
      console.log('questionReducer here');
      const question = action.question;
      return merge({}, state, {question});
      //here question means question: question
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    default:
      return state;
  };
};
export default questionReducer;
