import React from 'react';
import {Route} from 'react-router-dom';
import CommentFormContainer from '../comment/comment_form_container';


class CommentIndex extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
      waiting: true
    };
  }
  componentDidMount() {
    this.props.requestAllComments(5)
    .then(() => this.setState({waiting: false}));
  }

  render() {
    // console.log(getState());
    console.log(this.props);
    const {comments, errors } = this.props;
    if (this.state.waiting || !comments){
      return (<div></div>);
    }

    let commentItems =  comments.map(
      (comment, idx) =>
      // {console.log(comment);
        {
          let {id, body, author:{username, avatar}} = comment;
          return (<li key={`comments${id}`} >{body}</li>);
  }
);

    return (
      <div>
        <ul className="comment-list list-unstyled">
          <br/>

          <div className='indexcomments'>
            {commentItems}
            commentsItemsComes here
          </div>
          <br/>
        </ul>
      </div>

    );

  }
}

// <CommentForm createComment={this.props.createComment} />
export default CommentIndex;
