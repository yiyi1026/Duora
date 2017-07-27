import { connect } from 'react-redux';
import CommentForm from './comment_form';
import {createComment } from '../../actions/answer_actions';

// all these methods need to be udpated
const  mapStateToProps = (state) => {
  return {

    currentUser: state.session.currentUser
  };
}


const mapDispatchToProps = dispatch => ({
  createComment: (answer) => dispatch(createComment(answer)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
