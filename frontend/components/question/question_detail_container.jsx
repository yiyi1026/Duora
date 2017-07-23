import { connect } from 'react-redux';
import QuestionDetail from './question_detail';
import { requestSingleQuestion } from '../../actions/question_actions';
import {selectAllQuestions } from '../../reducers/selectors';

const  mapStateToProps = ({questions}) => ({
  question: selectAllQuestions(questions)
});

const mapDispatchToProps = dispatch => ({
  requestSingleQuestion: (id) => dispatch(requestSingleQuestion(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetail);
