import merge from 'lodash/merge';
import {combineReducers} from 'redux';
import {RECEIVE_SINGLE_COMMENT, CREATE_COMMENT, REMOVE_COMMENT, RECEIVE_ALL_COMMENTS} from '../actions/comment_actions';

const defaultState = {
  byId:{},
  allIds: [],
  currentComment: null,
  errors: []
};

const byIdReducer = (state = {}, action) => {
  Object.freeze(state);
  let id;
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      // return action.comments.byId;
      return action.comments;
    case RECEIVE_SINGLE_COMMENT:
      // return merge({}, state.comments.byId, {[action.comment.id]: action.comment})
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
      return Object.keys(action.comments).map(id => allIds.push(parseInt(id)));
    case RECEIVE_SINGLE_COMMENT:
      let id = action.comment.id;
      if (allIds.includes(id)){
        return state;
      }
      return [...state, action.comment.id];
    case REMOVE_COMMENT:
      idx = allIds.indexOf(action.comment.id);
      return allIds.splice(idx, 1);
    default:
      return state;
  }
};

// const commentReducer = (state = null, action) => {
//   Object.freeze(state);
//
//   switch(action.type){
//     case RECEIVE_SINGLE_ANSWER:
//       return action.comment.id;
//     case REMOVE_ANSWER:
//       return null;
//     default:
//       return state;
//   }
// };

const commentsReducer = combineReducers({byId: byIdReducer, allIds: allIdsReducer});
export default commentsReducer;
