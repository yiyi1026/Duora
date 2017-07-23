import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import questionsReducer from './questions_reducer';
import searchesReducer from './searches_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  // errors: errorsReducer,
  questions: questionsReducer,
  searchedQuestions: searchesReducer
  // ,
  // questions: questionsReducer
  // errors:[]
});

export default rootReducer;
