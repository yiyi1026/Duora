import {connect} from 'react-redux';
import FeedIndex from './feed_index';
import {requestAllTopics, createTopic, updateTopic, deleteTopic} from '../../actions/topic_actions';
import {selectAllTopics} from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    topics: selectAllTopics(state.topics),
    allTopicsIds: state.topics.allIds,
    currentTopic: state.topics.currentTopic,
    currentUser: state.session.currentUser,
    errors: []
}};

const mapDispatchToProps = dispatch => ({
  requestAllTopics: () => dispatch(requestAllTopics()),
  createTopic: (topic) => dispatch(createTopic(topic)),
  updateTopic: (topic) => dispatch(updateTopic(topic))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);
