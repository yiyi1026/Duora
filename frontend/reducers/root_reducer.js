import {combineReducers} from 'redux';

import sessionReducer from './session_reducer';
import questionsReducer from './questions_reducer';
import answersReducer from './answers_reducer';
import commentsReducer from './comments_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  questions: questionsReducer,
  answers: answersReducer,
  // errors: errorsReducer,
  comments: commentsReducer
});

export default rootReducer;
