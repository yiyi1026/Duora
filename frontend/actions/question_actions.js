import * as APIUtil from '../util/session_api_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_SINGLE_QUESTION = 'RECEIVE_SINGLE_QUESTION';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveSingleQuestion = question => ({
  type: RECEIVE_SINGLE_QUESTION,
  question
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveQuestions = (questions) => {
  return ({
    type: RECEIVE_QUESTIONS,
    questions
  });
}

export const createQuestion = question => dispatch => (
  APIUtil.createQuestion(question).then(
    (newQuestion) => (dispatch(receiveSingleQuestion(newQuestion))
  ),errors => (dispatch(receiveErrors(errors)))
  )
)

export const requestSingleQuestion = id => dispatch => (
  APIUtil.fetchSingleQuestion(id).then(
    (question) => (dispatch(receiveSingleQuestion(question))
  ),errors => (dispatch(receiveErrors(errors)))
  )
)


export const signup = (user) => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveSingleQuestion(user))
  ), error => (
    dispatch(receiveErrors({signup: error.responseJSON}))
  ))
);

export const fetchQuestions = (topic_id) => dispatch => (
  APIUtil.fetchQuestions(topic_id).then(
    questions => (dispatch(receiveQuestions(questions))
  ), errors => (dispatch(receiveErrors(errors)))
  )
);
