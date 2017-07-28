import {connect} from 'react-redux';
import QuestionIndex from './question_index';
import {requestAllQuestions, createQuestion, updateQuestion, deleteQuestion} from '../../actions/question_actions';
import {selectAllQuestions} from '../../reducers/selectors';
import { RingLoader } from 'react-spinners';

const mapStateToProps = (state) => {
  return {
    questions: selectAllQuestions(state.questions),
    allQuestionsIds: state.questions.allIds,
    currentQuestion: state.questions.currentQuestion,
    currentUser: state.session.currentUser,
    errors: []
}};

const mapDispatchToProps = dispatch => ({
  requestAllQuestions: () => dispatch(requestAllQuestions()),
  createQuestion: (question) => dispatch(createQuestion(question)),
  updateQuestion: (question) => dispatch(updateQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
