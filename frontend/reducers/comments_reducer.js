import merge from 'lodash/merge';
import {combineReducers} from 'redux';
import {
  RECEIVE_SINGLE_COMMENT,
  REMOVE_COMMENT,
  RECEIVE_ALL_COMMENTS} from '../actions/comment_actions';

const defaultState = {
  byId:{},
  allIds: [],
  currentComment: null,
  errors: []
};

const byIdReducer = (state = {}, action) => {
  Object.freeze(state);
    switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      
      return merge({}, state, action.comments);
    case RECEIVE_SINGLE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment})
    case REMOVE_COMMENT:
      let nextState = merge({}, state);
      delete nextState[action.comment.id];
      return nextState;
    default:
      return state;
  }
};

const allIdsReducer = (state = [], action) => {
  Object.freeze(state);

  let allIds = merge([], state);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      Object.keys(action.comments).forEach(
        id => {
          if (!allIds.includes(id)){
            allIds.push(id);
          }
        }
      );
      return allIds;
    case RECEIVE_SINGLE_COMMENT:
      let id = action.comment.id;
      if (allIds.includes(id)){
        return state;
      }
      return [...state, action.comment.id];
    case REMOVE_COMMENT:
      idx = allIds.indexOf(action.comment.id);
      allIds.splice(idx, 1);
      return allIds;
    default:
      return state;
  }
};

const commentReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SINGLE_COMMENT:
      return action.comment.id;
    case REMOVE_COMMENT:
      return null;
    default:
      return state;
  }
};

const commentsReducer = combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer,
  currentComment: commentReducer
});
export default commentsReducer;
