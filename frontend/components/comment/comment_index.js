import React from 'react';
import {Route} from 'react-router-dom';

class CommentItem extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
      waiting: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.requestAllComments(5)
    .then(() => this.setState({waiting: false}));
  }

  render() {
    // console.log(getState());
    // console.log(this.props);
    if (this.state.waiting){
      return (<div></div>);
    }
    const {comments, errors } = this.props;

    const commentItems = allCommentsIds.map(
      (id, idx) =>
      // {console.log(comment);
        { let comment = comments[idx];
          return (<QuestionIndexItem key={`indexcomments${id}`} comment={comment} updateQuestion={updateQuestion}/>);
  });  // const commentItems = {a:3};

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
export default CommentItem;
