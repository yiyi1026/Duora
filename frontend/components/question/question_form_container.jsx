import { connect } from 'react-redux';
import QuestionForm from './question_form';
import {
  createQuestion,
  updateQuestion,
  deleteQuestion
} from '../../actions/question_actions';
import { selectAllQuestions }from '../../reducers/selectors';

const  mapStateToProps = () => (
  {questions: selectAllQuestions(questions)}
);

const mapDispatchToProps = dispatch => ({
  createQuestion: (question) => dispatch(createQuestion(question))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
