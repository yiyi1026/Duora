import {connect} from 'react-redux';
// import CommentIndex from './comment_index';
import {requestAllComments, createComment, updateComment, deleteComment} from '../../actions/comment_actions';
//Do I need to keep this deleteComment????
import {selectAllComments} from '../../reducers/selectors';
import CommentItem from './comment_item';

const mapStateToProps = (state) => {
  return {}
  // console.log(state);
  let comments = state.comments
  return {comments: selectAllComments(comments), errors: []};
  // // here comments {byId:{}, allIds:[]}
};

const mapDispatchToProps = dispatch => ({
  requestAllComments: (question_id) => dispatch(requestAllComments(question_id)),
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
