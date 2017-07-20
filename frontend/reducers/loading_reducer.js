// import {
//   RECEIVE_ERRORS,
//   RECEIVE_CURRENT_USER
// } from '../actions/session_actions';

const initialState = {
  indexLoading: false,
  detailLoading: false
}

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_QUESTIONS:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_NEW_QUESTION:
    case RECEIVE_SINGLE_QUESTION:
    case RECEIVE_QUESTION_ERRORS:
      return Object.assign({}, state, { detailLoading: false });
    case START_LOADING_ALL_QUESTION:
      return Object.assign({}, state, { indexLoading: true });
    case CREATE_:
    case START_LOADING_SINGLE_QUESTION:
      return Object.assign({}, state, { detailLoading: true });
    default:
      return state;
  }
};
