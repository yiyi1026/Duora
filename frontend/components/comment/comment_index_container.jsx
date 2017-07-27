import {connect} from 'react-redux';
import {requestAllComments, createComment, updateComment, deleteComment} from '../../actions/comment_actions';
import {selectAllComments} from '../../reducers/selectors';
import CommentIndex from './comment_index';

const mapStateToProps = (state) => {
  let comments = state.comments;
  return {
    comments: selectAllComments(comments),
    allCommentsIds: comments.allIds,
    errors: []
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllComments: (answerId) => dispatch(requestAllComments(answerId)),
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
