import React from 'react';
import {Route} from 'react-router-dom';
import CommentFormContainer from '../comment/comment_form_container';
import {requestAllComments} from '../../actions/comment_actions'
import CommentIndexItem from './comment_index_item';
class CommentIndex extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
      waiting: true
    };
  }
  componentDidMount() {
    this.props.requestAllComments(4)
    .then(() => this.setState({waiting: false}));
  }

  render() {
    const {comments, errors, answerId} = this.props;
    if (this.state.waiting || !comments){
      return (<div></div>);
    }
    let commentItems =  comments.map(
      (comment, idx) =>
      // {;
        {
          let {id} = comment;
        return (
          <CommentIndexItem
          key={`comments${id}`}
          comment={comment}
          answerId={answerId}
          />);
        }
      );

    return (
      <div>
        <ul className="comment-list list-unstyled">
          <br/>

          <div className='indexcomments'>
            {commentItems}
          </div>
          <br/>
        </ul>
      </div>

    );

  }
}

// <CommentForm createComment={this.props.createComment} />
export default CommentIndex;
