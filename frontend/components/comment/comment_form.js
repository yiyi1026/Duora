import React from 'react';
import merge from 'lodash/merge';
import {withRouter} from 'react-router';
import * as SESSIONUTIL from '../../util/session_api_util';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      loading: true,
      author_id: this.props.currentUser? this.props.currentUser.id: null,
      answer_id: this.props.answer_id
    }
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
  }

  handleCommentUpdate(e) {
    // e.preventDefault();
    return e => {
      if (e.target.value) {
        // console.log(e.target.value);
        this.setState({body: e.target.value});
      }
      if (!this.state.author_id) {
        this.setState({author_id: this.props.currentUser.id});
      }
    };
  }

  handleCommentSubmit(e) {
    e.preventDefault();
    let answer_id = this.props.answerId;
    let comment = {
      body: this.state.body,
      author_id: this.props.currentUser.id,
      answer_id
    }
    this.props.createComment(comment).then(
      () => this.setState({loading: false, 
        body: ''}))
      // .then(this.props.history.push(null, `/answers/${this.props.answer.id}`));
    // history.pushState(null, '/');
    //how to make this page refresh
  // );
  }

  render() {
    let currentUser = this.props.currentUser;
    if (this.props.loading){
      return (<div></div>);
    }
    // console.log(this.props);
    return (
      <div className="row add-comment-form">
        <div className="left-padding-30">
          <a className="add-comment-form-item" href="#"><img className="img-circle pull-left" src={SESSIONUTIL.getAvatarUrl(currentUser)} width="25" height="25"/></a>
          <input type="text" className="form-control" id="comment_field" onChange={this.handleCommentUpdate()} value={this.state.body} id="question_field" className="left-margin-10 add-comment-form-item add-comment-input line-height-15" placeholder="Add a comment..."/>
          <button type="submit" onClick={this.handleCommentSubmit} className="add-comment-form-item PerfectColdButton all-margin-10" >
            <span>Submit</span>
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(CommentForm);
