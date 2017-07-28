import * as APIUtil from '../util/topic_api_util';
import { receiveErrors, clearErrors } from './error_actions';
// import { normalize } from 'normalizr';
export const RECEIVE_ALL_TOPICS = 'RECEIVE_ALL_TOPICS';
export const RECEIVE_SINGLE_TOPIC = 'RECEIVE_SINGLE_TOPIC';
export const REMOVE_TOPIC = 'REMOVE_TOPIC';
export const RECEIVE_SEARCHED_TOPICS = 'RECEIVE_SEARCHED_TOPICS';

export const receiveAllTopics = topics => ({
  type: RECEIVE_ALL_TOPICS,
  topics
});

export const receiveSingleTopic = (topic) => ({
  type: RECEIVE_SINGLE_TOPIC,
  topic
});


export const removeTopic = topic => ({
  type: REMOVE_TOPIC,
  topic
});

export const receiveSearchedTopics = topics => ({
  type: RECEIVE_SEARCHED_TOPICS,
  topics: topics
});

export const requestAllTopics = () => dispatch => (
  APIUtil.fetchAllTopics()
  .then(
    topics => dispatch(receiveAllTopics(topics))
    , errors => dispatch(receiveErrors(errors))
  )
);

export const requestSingleTopic = id => dispatch => (
  APIUtil.fetchSingleTopic(id)
  .then(
    topic => dispatch(receiveSingleTopic(topic))
    ,errors => dispatch(receiveErrors(errors))
  )
);

export const createTopic = topic => dispatch => (
  APIUtil.createTopic(topic)
  .then(
    topic => {
      dispatch(receiveSingleTopic(topic));
      dispatch(clearErrors());
    },errors => dispatch(receiveErrors(errors))
));

export const updateTopic = topic => dispatch => (
  APIUtil.updateTopic(topic)
  .then(topic => dispatch(receiveSingleTopic(topic))
  ,errors => dispatch(receiveErrors(errors))
  )
);

export const deleteTopic = topic => dispatch => (
  APIUtil.deleteTopic(topic)
  .then(topic => dispatch(removeTopic(topic))
  )
);

export const searchTopics = query => dispatch => (
  APIUtil.searchTopics(query)
  .then((topics) =>
    dispatch(receiveSearchedTopics(topics))
  )
);
