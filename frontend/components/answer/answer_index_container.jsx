import { connect } from 'react-redux';
import AnswerIndex from './answer_index';
import {
  requestAllAnswers,
  requestSingleAnswer,
  createAnswer,
  updateAnswer,
  deleteAnswer
} from '../../actions/answer_actions';

import {selectAllAnswers, selectSingleAnswer } from '../../reducers/selectors';

const  mapStateToProps = (state) =>{
  const {session, answers} = state;
  return {
    // answers: state.answers.byId,
    answers: selectAllAnswers(answers),
    currentUser: session.currentUser ? session.currentUser : null,
    errors:[]

  };
};


const mapDispatchToProps = dispatch => ({
  requestAllAnswers: (questionId) => dispatch(requestAllAnswers(questionId)),
  updateAnswer: (answer) => dispatch(updateAnswer(answer)),
  deleteAnswer: (answer) => dispatch(deleteAnswer(answer))
  // createAnswer: (answer) => dispatch(createAnswer(answer)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerIndex);
