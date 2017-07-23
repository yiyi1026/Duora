import {
  RECEIVE_SINGLE_QUESTION,
  RECEIVE_ALL_QUESTIONS,
  REMOVE_QUESTION
} from '../actions/question_actions';
const questionReducer = (state, action) => {
  let question;
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'RECEIVE_SINGLE_QUESTION':
      question = action.question
      return merge({}, state, {question})
    default:
      return state;
  }
};

export default questionReducer;
