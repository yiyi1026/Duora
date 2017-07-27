import { connect } from 'react-redux';
import AnswerItem from './answer_item';
import {
  // requestAllAnswers,
  requestSingleAnswer,
  createAnswer,
  updateAnswer,
  deleteAnswer
} from '../../actions/answer_actions';

import {selectAllAnswers, selectSingleAnswer } from '../../reducers/selectors';

const  mapStateToProps = (state) =>{
  console.log(state);
  return {
    answers: state.answers.byId,
    // answer: selectSingleAnswer(answer),
    currentUser: session.currentUser ? session.currentUser : null,
    errors:[]

  };
};


const mapDispatchToProps = dispatch => ({
  requestSingleAnswer: (id) => dispatch(requestSingleAnswer(id)),
  requestAllAnswers: (questionId) => dispatch(requestAllAnswers(questionId)),
  updateAnswer: (answer) => dispatch(updateAnswer(answer)),
  deleteAnswer: (answer) => dispatch(deleteAnswer(answer))
  // createAnswer: (answer) => dispatch(createAnswer(answer)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerItem);
