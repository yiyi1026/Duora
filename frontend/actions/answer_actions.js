import * as APIUtil from '../util/answer_api_util';
import { receiveErrors, clearErrors } from './error_actions';
import { normalize } from 'normalizr';
export const RECEIVE_SINGLE_ANSWER = 'RECEIVE_SINGLE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';
export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
export const receiveAllAnswers = answers => ({
  type: RECEIVE_ALL_ANSWERS,
  answers
});
// export const RECEIVE_SEARCHED_ANSWERS = 'RECEIVE_SEARCHED_ANSWERS';

export const receiveSingleAnswer = answer => ({
  type: RECEIVE_SINGLE_ANSWER,
  answer
});

export const removeAnswer = answer => ({
  type: REMOVE_ANSWER,
  answer
});

// export const receiveSearchedAnswers = answers => {
//   return(
//   {
//   type: RECEIVE_SEARCHED_ANSWERS,
//   searchedAnswers: answers
//   })
// };

export const requestSingleAnswer = id => dispatch => (
  APIUtil.fetchSingleAnswer(id).then(
    (answer) => {
      dispatch(receiveSingleAnswer(answer));
    }, errors => dispatch(receiveErrors(errors))
  )
)

export const requestAllAnswers = questionId => dispatch => {
  return APIUtil.fetchAllAnswers(questionId).then(
    (response) => {
      const {answers} = response;
      return dispatch(receiveAllAnswers(answers));
    }, errors => dispatch(receiveErrors(errors))
  );

};

export const createAnswer = answer => dispatch => (
  APIUtil.createAnswer(answer)
  .then( answer =>
    {
      dispatch(receiveSingleAnswer(answer));
      dispatch(clearErrors());
    },errors => dispatch(receiveErrors(errors))
  )
)

export const updateAnswer = answer => dispatch => (
  APIUtil.updateAnswer(answer)
  .then(
    answer => dispatch(receiveSingleAnswer(answer)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const deleteAnswer = answer => dispatch => (
  APIUtil.deleteAnswer(answer)
  .then(
    answer => dispatch(removeAnswer(answer))
  )
);
