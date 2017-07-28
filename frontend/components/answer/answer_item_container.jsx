import { connect } from 'react-redux';
import AnswerItem from './answer_item';
import {requestAllComments} from '../../actions/comment_actions';
import {
  createAnswer,
  updateAnswer,
  deleteAnswer
} from '../../actions/answer_actions';

import {selectSingleAnswer } from '../../reducers/selectors';

const  mapStateToProps = (state) =>{
  const {session} = state;
  return {
    currentUser: session.currentUser ? session.currentUser : null,
    errors:[]

  };
};


const mapDispatchToProps = (dispatch, {answer} )=> ({
  requestAllComments: (answerid) => dispatch(requestAllComments(answer.id)),
  updateAnswer: () => dispatch(updateAnswer(answer)),
  deleteAnswer: () => dispatch(deleteAnswer(answer))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerItem);
