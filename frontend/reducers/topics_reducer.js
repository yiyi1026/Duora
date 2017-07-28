import merge from 'lodash/merge';
import {combineReducers} from 'redux';
import {
  RECEIVE_SINGLE_TOPIC,
  RECEIVE_ALL_TOPICS,
  REMOVE_TOPIC,
  RECEIVE_SEARCHED_TOPICS
} from '../actions/topic_actions';

const defaultState =
{
  byId: {},
  allIds: [],
  searchIds: [],
  errors: [],
  currentQuestion: null

};

const byIdReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_TOPICS:
    case RECEIVE_SEARCHED_TOPICS:
      return merge({}, state, action.topics);
    case RECEIVE_SINGLE_TOPIC:
      return merge({}, nextState, {[action.topic.id]: action.topic});
    case REMOVE_TOPIC:
      delete nextState[action.topic.id];
      return nextState;
    default:
      return state;
  }
};

const allIdsReducer = (state = [], action) => {
  Object.freeze(state);

  let allIds=merge([], state);
  switch (action.type) {
    case RECEIVE_SEARCHED_TOPICS:
    case RECEIVE_ALL_TOPICS:
      Object.keys(action.topics).forEach(
        (id) => {
          const intid = parseInt(id);
          if (!allIds.includes(intid)){
            allIds.push(intid);}
          });
      return allIds;
    case RECEIVE_SINGLE_TOPIC:
      let id = action.topic.id;
      if (allIds.includes(id)){
        return state;
      }else{
        return [...state, action.topic.id];
      }
    case REMOVE_TOPIC:
    // needs modification;
      let idx = allIds.indexOf(action.topic.id);
      allIds.splice(idx, 1);
      return allIds;
    default:
      return state;
  }
};

const searchIdsReducer = (state = [], action) => {
  Object.freeze(state);

  let searchIds = [];
  switch (action.type) {
    case RECEIVE_SEARCHED_TOPICS:
      Object.keys(action.topics).forEach( (id) => searchIds.push(id));
      return searchIds;
    default:
      return state;
  }
};

const topicReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SINGLE_TOPIC:
      return action.topic.id;
    case REMOVE_TOPIC:
      return null;
    default:
      return state;
  }
};

const topicsReducer = combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer,
  // currentQuestion: topicReducer,
  searchIds: searchIdsReducer
});
export default topicsReducer;
