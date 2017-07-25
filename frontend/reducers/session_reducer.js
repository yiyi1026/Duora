import merge from 'lodash/merge';
import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const nullUser = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      console.log('here');
      const currentUser = action.currentUser;
      return merge({}, nullUser, {currentUser});
      //here currentUser means currentUser: currentUser
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {errors});
    default:
      return state;
  };
};
export default sessionReducer;
