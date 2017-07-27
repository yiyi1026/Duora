import * as APIUtil from '../util/answer_api_util';
import { receiveErrors, clearErrors } from './error_actions';
export const RECEIVE_SINGLE_ANSWER = 'RECEIVE_SINGLE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';
export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';

export const receiveAllAnswers = answers => ({
  type: RECEIVE_ALL_ANSWERS,
  answers
});

export const receiveSingleAnswer = answer => ({
  type: RECEIVE_SINGLE_ANSWER,
  answer
});

export const removeAnswer = answer => ({
  type: REMOVE_ANSWER,
  answer
});

export const requestSingleAnswer = id => dispatch => (
  APIUtil.fetchSingleAnswer(id).then(
    (answer) => {
      return dispatch(receiveSingleAnswer(answer));
    }, errors => dispatch(receiveErrors(errors))
  )
)

//this method is for request all answers for one question(question_id)
export const requestAllAnswers = questionId => dispatch => {
  return APIUtil.fetchAllAnswers(questionId).then(
    answers => dispatch(receiveAllAnswers(answers))
    , errors => dispatch(receiveErrors(errors))
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
);

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
