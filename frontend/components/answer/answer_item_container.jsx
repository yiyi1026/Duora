import { connect } from 'react-redux';
import AnswerItem from './answer_item';
import { requestSingleQuestions } from '../../actions/question_actions';
import {selectAllQuestions } from '../../reducers/selectors';

// all these methods need to be udpated
const  mapStateToProps = () => (
  {questions: selectAllQuestions}
);


const mapDispatchToProps = dispatch => ({
  requestSingleQuestions: () => dispatch(requestSingleQuestions())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerItem);
