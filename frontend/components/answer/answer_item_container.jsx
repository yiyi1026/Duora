import { connect } from 'react-redux';
import AnswerItem from './answer_item';
import {
  requestAllAnswers,
  createAnswer,
  updateAnswer,
  deleteAnswer
} from '../../actions/answer_actions';
//Do I need to keep this deleteAnswer????
import {selectAllAnswers } from '../../reducers/selectors';

const  mapStateToProps = (state) =>{
  console.log(state.answers);
  return {
  answers: selectAllAnswers(state.answers),
  errors:[]
};
// here answers {byId:{}, allIds:[]}
};


const mapDispatchToProps = dispatch => ({
  createAnswer: (answer) => dispatch(createAnswer(answer)),
  updateAnswer: (answer) => dispatch(updateAnswer(answer))
  // deleteAnswer: (answer) => dispatch(deleteAnswer(answer))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerItem);
