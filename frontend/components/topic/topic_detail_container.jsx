import {connect} from 'react-redux';
import TopicDetail from './topic_detail';
import {requestSingleTopic} from '../../actions/topic_actions';
import {selectAllTopics, selectSingleTopic, selectAllAnswers} from '../../reducers/selectors';
const mapStateToProps = (state, {match}) => {
  // console.log(state);
  // console.log(state.topics);
  return ({
    questions: state.questions,
    // answers: state.answers,
    topics: state.topics,
    currentTopic: state.topics.currentTopic
  });
};


const mapDispatchToProps = dispatch => ({
  requestSingleTopic: (id) => dispatch(requestSingleTopic(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetail);
