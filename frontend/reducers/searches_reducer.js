import merge from 'lodash/merge';
import {combineReducers} from 'redux';
import {RECEIVE_SEARCHED_QUESTIONS} from '../actions/question_actions';

const initialState = {
  question: {
    answersIds: []

  },
  errors: []
};

const byIdReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  let newQuestion;
  // console.log(newState);
  switch (action.type) {
    case RECEIVE_SEARCHED_QUESTIONS:
      // console.log(action.searchedQuestions);
      if (action.searchedQuestions){
        let questions = action.searchedQuestions||{};
        Object.keys(questions).forEach(id => newState[id] = questions.id);
      }
      return newState;
    default:
      return state;
  }
};

const allIdsReducer = (state = [], action) => {
  Object.freeze(state);
  // console.log(action);
  let newState = merge([], state);
  switch (action.type) {
    case RECEIVE_SEARCHED_QUESTIONS:
      newState = [];
      console.log(action);
      // if(action.searchedQuestions){}
      if (action.searchedQuestions){
      let questions = action.searchedQuestions||{};
      Object.keys(questions).forEach(question => newState.push(question.id));
      }
      return newState;
    default:
      return state;
  }
};

const searchesReducer = combineReducers({byId: byIdReducer, allIds: allIdsReducer});
export default searchesReducer;
