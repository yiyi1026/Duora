import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { requestSingleQuestions } from '../../actions/question_actions';
import {selectAllQuestions } from '../../reducers/selectors';

const  mapStateToProps = () => (
  questions: selectAllQuestions
);


const mapDispatchToProps = dispatch => ({
  requestSingleQuestions: () => dispatch(requestSingleQuestions())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
