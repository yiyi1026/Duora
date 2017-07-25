import React from 'react';
import {Route} from 'react-router-dom';

class CommentItem extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this;
  }
  componentDidMount() {
    this.props.requestAllComments(this.props.answerId)
  }

  update(body){
    return (e) => this.setState({body: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let comment = {
      body: this.state.body,
      answer_id: this.props.answerId,
      author_id: this.props.currentUser.id
    };

    this.props.createComment(comment).then(() => this.setState({body: ''}));
  }

  render() {
    if (!this.state.answer_id){
      return (<div></div>);
    }

    const {comment} = this.props;
    const {author, body, id, answer_id, created_at} = comment;

    console.log(this.props)
    let avatar = '/images/avatar/' + author.avatar;

    return (
      <div className="container top-boader top-margin-30">
        <div className="row all-margin-10">
            <div className="all-margin-10">
              <a href="#"><img className="img-circle pull-left" src={avatar} width="40" height="40"/></a>
            </div>
            <div className="left-margin-10 right-margin-10">
              <div className="">
                <span>
                  <a className="user black" href="#">{author.username}</a>
                </span>
                <span >,
                </span>
                <span>{author.description}</span>
              </div>
              <div className="">
                <span>
                  <a className="grey" href="#" target="">Commented at {created_at}</a>
                </span>
              </div>
            </div>
          </div>

        <span dangerouslySetInnerHTML={{
              __html: body
            }}></span>


        <div className="row top-margin-10 bottom-margin-10">
            <div className=" accordion-heading">
              <span className="left-margin-10">
                <a className="Upvote" href="#">
                  <span>Upvote</span>
                  <span className="divider-vertical-15px"></span>
                  <span className=" ">95</span>
                </a>
              </span>
              <span className="left-margin-10">
                <a className="Downvote grey" href="#">
                  <span className=" ">Downvote</span>
                </a>
              </span>
            </div>
          </div>
          <div className="row add-comment-form">
            <div className=" left-margin-30">
              <div className="left-margin-30">
                <a href="#"><img className="img-circle pull-left" src={avatar} width="25" height="25"/></a>
                <input placeholder="Add a comment..."/>
                 <button className="PerfectColdButton all-margin-10" >
                  <span>Submit</span>
                 </button>
              </div>
            </div>
          </div>
      </div>

    );

  }
}

// <CommentForm createComment={this.props.createComment} />
export default CommentItem;
