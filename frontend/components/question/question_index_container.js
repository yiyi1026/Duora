import {connect} from 'react-redux';
import QuestionIndex from './question_index';
import {requestAllQuestions, createQuestion, updateQuestion, deleteQuestion} from '../../actions/question_actions';
import {selectAllQuestions, selectQuestionsByTopicId} from '../../reducers/selectors';
import { RingLoader } from 'react-spinners';

const mapStateToProps = (state, {match}) => {
  console.log(state);
  // console.log(this.props);
  const topicId = match.params.topicId? match.params.topicId : null;
  let q = selectQuestionsByTopicId(state.questions, topicId);
  return {
    questions: q,
    // questions: selectAllQuestions(state.questions),
    allQuestionsIds: state.questions.allIds,
    // TopicQuestionIds: state.questions.topicQuestionIds,
    currentQuestion: state.questions.currentQuestion,
    currentUser: state.session.currentUser,
    currentTopic: state.session.currentTopic,
    errors: []
}};

const mapDispatchToProps = dispatch => ({
  requestSingleTopic: (topicId) => dispatch(requestSingleTopic(topicId)),
  requestAllQuestions: () => dispatch(requestAllQuestions()),
  createQuestion: (question) => dispatch(createQuestion(question)),
  updateQuestion: (question) => dispatch(updateQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
