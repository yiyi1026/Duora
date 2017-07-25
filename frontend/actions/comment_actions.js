import * as APIUtil from '../util/comment_api_util';
import { receiveErrors, clearErrors } from './error_actions';
import { normalize } from 'normalizr';
export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const receiveAllComments = comments => {
  return {
    type: RECEIVE_ALL_COMMENTS,
    comments
  };
};

export const receiveSingleComment = comment => ({
  type: RECEIVE_SINGLE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const requestSingleComment = id => dispatch => (
  APIUtil.fetchSingleComment(id).then(
    ({comment, comments}) => {
      // console.log(comments);
      dispatch(receiveSingleComment(comment));
    },errors => dispatch(receiveErrors(errors))
  )
);

export const requestAllComments = (questionId) => dispatch => {
  // console.log('actions');
  return APIUtil.fetchAllComments(questionId).then(
    ({comments}) => {
      return dispatch(receiveAllComments(comments));
    }, errors => dispatch(receiveErrors(errors))
  );
};

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment)
  .then(
    (comment) => {
    dispatch(receiveSingleComment(comment));
    dispatch(clearErrors())
  },errors => dispatch(receiveErrors(errors))
))

export const updateComment = comment => dispatch => (
  APIUtil.updateComment(comment)
  .then(comment => dispatch(receiveSingleComment(comment)))
);

export const deleteComment = comment => dispatch => (
  APIUtil.deleteComment(comment).then(comment => dispatch(removeComment(comment)))
);
