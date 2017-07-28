import React from 'react';
import {Route} from 'react-router-dom';
import CommentFormContainer from '../comment/comment_form_container';
// import {requestAllComments} from '../../actions/comment_actions'
import CommentIndexItem from './comment_index_item';
import { RingLoader } from 'react-spinners';
import {CommentsByAnswerId} from '../../reducers/selectors';

class CommentIndex extends React.Component {

  render() {
    const {comments, errors, answerId} = this.props;
    // let commentsByAnwerId = CommentsByAnswerId(answerId, comments);
    if (!comments){
      return (<div></div>);
    }
    let commentItems =  comments.map(
      (comment, idx) =>
        {
          let {id} = comment;
          return (
            <CommentIndexItem
            key={`comments${id}`}
            comment={comment}
            />);
        }
    );

    return (
      <div className="row add-comment-form">
        <div className="left-padding-30">
          <ul className="comment-list list-unstyled">
            <br/>

            <div className='indexcomments'>
              {commentItems}
            </div>
            <br/>
          </ul>
        </div>
      </div>

    );

  }
}

export default CommentIndex;
