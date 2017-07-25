import {connect} from 'react-redux';
// import CommentIndex from './comment_index';
import {requestAllComments, createComment, updateComment, deleteComment} from '../../actions/comment_actions';
//Do I need to keep this deleteComment????
import {selectAllComments} from '../../reducers/selectors';

const mapStateToProps = (state) => {
  console.log(state);
  let comments = state.comments
  return {comments: selectAllComments(comments), errors: []};
  // here comments {byId:{}, allIds:[]}
};

const mapDispatchToProps = dispatch => ({
  requestAllComments: () => dispatch(requestAllComments()),
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
