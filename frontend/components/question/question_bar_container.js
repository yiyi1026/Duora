import { connect } from 'react-redux';
import QuestionBar from './question_bar';
import {
  createQuestion,
  updateQuestion,
  deleteQuestion
} from '../../actions/question_actions';
import { selectAllQuestions }from '../../reducers/selectors';

const  mapStateToProps = () => (
  {questions: selectAllQuestions()}
);


const mapDispatchToProps = dispatch => ({
  createQuestion: (question) => dispatch(createQuestion(question))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionBar);
