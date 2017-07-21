import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import questionReducer from './question_reducer';

const rootReducer = combineReducers({
  session: sessionReducer
  // ,
  // questions: questionReducer
  // errors:[]
});

export default rootReducer;
