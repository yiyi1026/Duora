import * as APIUtil from '../util/answer_api_util';
import { receiveErrors, clearErrors } from './error_actions';
import { normalize } from 'normalizr';
export const RECEIVE_SINGLE_ANSWER = 'RECEIVE_SINGLE_ANSWER';
export const CREATE_ANSWER = 'CREATE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';
export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
export const receiveAllAnswers = answers => {
  // console.log(answers);
  return {
    type: RECEIVE_ALL_ANSWERS,
    answers
  };
};
// export const RECEIVE_SEARCHED_ANSWERS = 'RECEIVE_SEARCHED_ANSWERS';

export const receiveSingleAnswer = answer => ({
  type: RECEIVE_SINGLE_ANSWER,
  answer
});

export const removeAnswer = answer => ({
  type: REMOVE_ANSWER,
  answer
})

// export const receiveSearchedAnswers = answers => {
//   return(
//   {
//   type: RECEIVE_SEARCHED_ANSWERS,
//   searchedAnswers: answers
//   })
// };

export const requestSingleAnswer = id => dispatch => (
  APIUtil.fetchSingleAnswer(id).then(
    ({answer, comments}) => {
      // console.log(answers);
      dispatch(receiveSingleAnswer(answer));
    }, errors => dispatch(receiveErrors(errors))
  )
)

export const requestAllAnswers = () => dispatch => {
  // console.log('actions');
  return APIUtil.fetchAllAnswers().then(
    (state) => {
      // console.log(state);
      const {answers} = state;
      // console.log(state);
      // console.log(questions);
      return dispatch(receiveAllAnswers(answers));
    }, errors => dispatch(receiveErrors(errors))
  );

};

export const createAnswer = answer => dispatch => (
  APIUtil.createAnswer(answer)
  .then(
    (answer) => {
      // console.log(answer)
    dispatch(receiveSingleAnswer(answer));
    dispatch(clearErrors())
  },errors => dispatch(receiveErrors(errors))
))

export const updateAnswer = answer => dispatch => (
  APIUtil.updateAnswer(answer)
  .then(answer => dispatch(receiveSingleAnswer(answer)))
);

export const deleteAnswer = answer => dispatch => (
  APIUtil.deleteAnswer(answer).then(answer => dispatch(removeAnswer(answer)))
);

// export const searchAnswers = query => dispatch => (
//   APIUtil.searchAnswers(query).then(({answers}) => dispatch(receiveSearchedAnswers(answers)))
// );
