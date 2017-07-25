import merge from 'lodash/merge';
import {combineReducers} from 'redux';
import {RECEIVE_SINGLE_COMMENT, CREATE_COMMENT, REMOVE_COMMENT, RECEIVE_ALL_COMMENTS} from '../actions/comment_actions';

const initialState = {
  comments: {


  },
  errors: []
};

const byIdReducer = (state = {}, action) => {
  Object.freeze(state);
  // console.log(state);
  let newState = {};
  // console.log(newState);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      // console.log(action.comments);
      action.comments.forEach(comment => newState[comment.id] = comment);
      // console.log(newState);
      return action.comments;

    case RECEIVE_SINGLE_COMMENT:
    case CREATE_COMMENT:
      newState = merge({}, state);
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      nextState = merge({}, state);
      delete nextState[action.comment.id];
      return nextState;
    default:
      return state;
  }
};

const allIdsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = merge([], state);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      // console.log(action);
      action.comments.forEach( comment => (newState.push(comment.id)));
      // console.log(newState);
      return newState;
    case RECEIVE_SINGLE_COMMENT:
      return [action.comment.id];
    case CREATE_COMMENT:
      return [
        ...state,
        action.comment.id
      ];
    case REMOVE_COMMENT:
      idx = newState.indexOf(action.comment.id);
      return newState.splice(idx, 1);
    default:
      return state;
  }
};

const commentsReducer = combineReducers({byId: byIdReducer, allIds: allIdsReducer});
export default commentsReducer;
