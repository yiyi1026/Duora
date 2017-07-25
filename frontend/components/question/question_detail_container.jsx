import {connect} from 'react-redux';
import QuestionDetail from './question_detail';
import {requestSingleQuestion} from '../../actions/question_actions';
import {selectAllQuestions, selectSingleQuestion} from '../../reducers/selectors';

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    answers: state.answers,
    questions: state.questions
  })
};

const mapDispatchToProps = dispatch => ({
  requestSingleQuestion: (id) => dispatch(requestSingleQuestion(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
