import {connect} from 'react-redux';
import QuestionDetail from './question_detail';
import {requestSingleQuestion} from '../../actions/question_actions';
import {selectAllQuestions, selectSingleQuestion, selectAllAnswers} from '../../reducers/selectors';
const mapStateToProps = (state, {match}) => {
  // console.log(state);
  // console.log(state.questions);
  // console.log(match);
  return {
    // answers: state.answers,
    // question:   state.questions.byId[match.params.questionId],
    // questions: state.questions,
    currentQuestion: match.params.questionId
  }
};


const mapDispatchToProps = dispatch => ({
  requestSingleQuestion: (id) => dispatch(requestSingleQuestion(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
