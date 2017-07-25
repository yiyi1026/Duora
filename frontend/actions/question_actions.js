import * as APIUtil from '../util/question_api_util';
import { receiveErrors, clearErrors } from './error_actions';
import { normalize } from 'normalizr';
export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_SINGLE_QUESTION = 'RECEIVE_SINGLE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const RECEIVE_SEARCHED_QUESTIONS = 'RECEIVE_SEARCHED_QUESTIONS';
import {receiveAllAnswers} from './answer_actions'

export const receiveAllQuestions = questions => {
  // console.log(questions);
  return {
    type: RECEIVE_ALL_QUESTIONS,
    questions
  };
};

export const receiveSingleQuestion = (question) => {
  // console.log(question);
  return ({
  type: RECEIVE_SINGLE_QUESTION,
  questions: question,

});
};

export const removeQuestion = question => ({
  type: REMOVE_QUESTION,
  question
})

export const receiveSearchedQuestions = questions => {
  console.log(questions);
  return(
  {
  type: RECEIVE_SEARCHED_QUESTIONS,
  searchedQuestions: questions
  })
};

export const requestAllQuestions = () => dispatch => {
  // console.log('actions');
  return APIUtil.fetchAllQuestions().then(
    (questions) => {

      // console.log(questions);
      return dispatch(receiveAllQuestions(questions));
    }, errors => dispatch(receiveErrors(errors))
  );

};

export const requestSingleQuestion = id => dispatch => (
  APIUtil.fetchSingleQuestion(id).then(

    (response) => {
      // const {question, answers} = response;
      // console.log(response);
      const {id, title, body, author, answers, topic, created_at, updated_at} = response;
      const question = {id, title, body, author, topic, created_at, updated_at};
      // console.log(question);
      dispatch(receiveAllAnswers(answers));
      dispatch(receiveSingleQuestion(question));
    },errors => dispatch(receiveErrors(errors))
  )
)

export const createQuestion = question => dispatch => (
  APIUtil.createQuestion(question)
  .then(
    (question) => {
      console.log(question)
    dispatch(receiveSingleQuestion(question));
    dispatch(clearErrors())
  },errors => dispatch(receiveErrors(errors))
))

export const updateQuestion = question => dispatch => (
  APIUtil.updateQuestion(question)
  .then(question => dispatch(receiveSingleQuestion(question)))
);

export const deleteQuestion = question => dispatch => (
  APIUtil.deleteQuestion(question).then(question => dispatch(removeQuestion(question)))
);

export const searchQuestions = query => dispatch => (
  APIUtil.searchQuestions(query).then((questions) => {
    console.log(questions);
    dispatch(receiveSearchedQuestions(questions))})
);
