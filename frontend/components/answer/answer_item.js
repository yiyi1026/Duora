import React from 'react';
import {Route} from 'react-router-dom';

class AnswerItem extends React.Component {
  componentDidMount() {
  }
  render() {
    const {answer} = this.props;
    const {author, body, id, question_id, created_at} = answer;
    
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
                  <a className="grey" href="#" target="">Answered at {created_at}</a>
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

// <AnswerForm createAnswer={this.props.createAnswer} />
export default AnswerItem;
