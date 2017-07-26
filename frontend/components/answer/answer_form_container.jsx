import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { requestSingleQuestion } from '../../actions/question_actions';
import {createAnswer } from '../../actions/answer_actions';

// all these methods need to be udpated
const  mapStateToProps = (state) => {
  console.log(state);
  return {currentUser: state.session.currentUser};
}


const mapDispatchToProps = dispatch => ({
  createAnswer: (answer) => dispatch(createAnswer(answer)),
  // requestSingleQuestion: (id) => dispatch(requestSingleQuestion(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerForm);
