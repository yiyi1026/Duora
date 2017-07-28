import {connect} from 'react-redux';
import {requestAllComments, createComment, updateComment, deleteComment} from '../../actions/comment_actions';
import CommentIndex from './comment_index';
import {CommentsByAnswerId} from '../../reducers/selectors'
const mapStateToProps = (state, {answerId}) => {
  let comments = state.comments;
  return {
    comments: CommentsByAnswerId(comments, answerId),
    answerId,
    errors: []
  };
};

const mapDispatchToProps = dispatch => ({
  // requestAllComments: (answerId) => dispatch(requestAllComments(answerId)),
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
