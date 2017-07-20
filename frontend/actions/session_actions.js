// login(user) (thunk action creator)
// logout() (thunk action creator)
// signup(user) (thunk action creator)
// receiveCurrentUser(currentUser) (regular action creator)
// receiveErrors(errors) (regular action creator)
import * as APIUtil from '../util/session_api_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = (user) => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), error => (
    dispatch(receiveErrors({signup: error.responseJSON}))
  ))
);

// export const signup = (user) => dispatch => (
//   APIUtil.signup(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), error => (
//     dispatch(receiveErrors(error.responseJSON))
//   ))
// );

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ),error => (
    dispatch(receiveErrors({login: error.responseJSON}))
  ))
);

// export const login = user => dispatch => (
//   APIUtil.login(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ),error => (
//     dispatch(receiveErrors(error.responseJSON))
//   ))
// );
//do we need raising error for logout when not logged in? yes for now
export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

// export const updateUser
