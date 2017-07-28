import React from 'react';
import {Route} from 'react-router-dom';
import CommentFormContainer from '../comment/comment_form_container';
import {requestAllComments} from '../../actions/comment_actions'
import CommentIndexItem from './comment_index_item';
import { RingLoader } from 'react-spinners';

class CommentIndex extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
      loading: true
    };
  }
  componentDidMount() {
    this.props.requestAllComments(4)
    .then(() => this.setState({loading: false}));
  }

  render() {
    const {comments, errors, answerId} = this.props;
    if (this.state.loading || !comments){
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
      // <div className="row add-comment-form">
      //   <div className="left-padding-30">
      //     <a className="add-comment-form-item" href="#"><img className="img-circle pull-left" src={SESSIONUTIL.getAvatarUrl(currentUser)} width="25" height="25"/></a>
      //     <input type="text" className="form-control" id="comment_field" onChange={this.handleCommentUpdate()} value={this.state.body} id="question_field" className="left-margin-10 add-comment-form-item add-comment-input line-height-15" placeholder="Add a comment..."/>
      //     <button type="submit" onClick={this.handleCommentSubmit} className="add-comment-form-item PerfectColdButton all-margin-10" >
      //       <span>Submit</span>
      //     </button>
      //   </div>
      // </div>
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

// <CommentForm createComment={this.props.createComment} />
export default CommentIndex;
