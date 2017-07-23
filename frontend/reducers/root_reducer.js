import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import questionsReducer from './questions_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  // errors: errorsReducer,
  questions: questionsReducer,
  searchedQuestions: questionsReducer
  // ,
  // questions: questionsReducer
  // errors:[]
});

export default rootReducer;
