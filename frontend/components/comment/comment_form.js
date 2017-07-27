import React from 'react';
import merge from 'lodash/merge';
import {withRouter} from 'react-router';
import * as SESSIONUTIL from '../../util/session_api_util';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: 'Add a Comment',
      waiting: true
    }
    this.update = (rte) => this.setState({rte});
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    let answer_id = this.props.answer.id;
    let comment = {
      body: this.state.body,
      author_id: this.props.currentUser.id,
      answer_id
    }
    this.props.createComment(fcomment).then(
      () => this.setState({waiting: false}))
      // .then(this.props.history.push(null, `/answers/${this.props.answer.id}`));
    // history.pushState(null, '/');
    //how to make this page refresh
  // );
  }

  render() {
    if (this.props.waiting){
      return <div></div>;
    }
    return (
      <div className="row add-comment-form ">
        <div className=" left-padding-30">
          <a className="add-comment-form-item" href="#"><img className="img-circle pull-left" src={SESSIONUTIL.getAvatarUrl(currentUser)} width="25" height="25"/></a>
          <input className="left-margin-10 add-comment-form-item add-comment-input line-height-15" placeholder="Add a comment..."/>
          <button className="add-comment-form-item PerfectColdButton all-margin-10" >
            <span>Submit</span>
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(CommentForm);
