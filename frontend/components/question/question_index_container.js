import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import {
  requestAllQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion
} from '../../actions/question_actions';
//Do I need to keep this deleteQuestion????
import {selectAllQuestions } from '../../reducers/selectors';

const  mapStateToProps = ({questions, errors}) =>({
  questions: selectAllQuestions(questions),
  errors
});


const mapDispatchToProps = dispatch => ({
  requestAllQuestions: () => dispatch(requestAllQuestions()),
  createQuestion: (question) => dispatch(createQuestion(question)),
  updateQuestion: (question) => dispatch(updateQuestion(question))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
