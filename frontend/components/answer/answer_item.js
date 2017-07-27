import React from 'react';
import {Route} from 'react-router-dom';
import javascript_time_ago from 'javascript-time-ago';
import {requestSingleAnswer} from '../../actions/answer_actions';
import * as SESSIONUTIL from '../../util/session_api_util';
import CommentIndexContainer from '../comment/comment_index_container';
// import CommentFormContainer from '../comment/comment_form_container';

class AnswerItem extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    const answer = this.props.answer;
    // console.log(this.state.answer);
    if(!answer){
      return <div></div>;
    }
    let { body, id, question_id, created_at, author} = answer;

    let avatar = SESSIONUTIL.getAvatarUrl(author);

    javascript_time_ago.locale(require('javascript-time-ago/locales/en'));
    require('javascript-time-ago/intl-messageformat-global');
    require('intl-messageformat/dist/locale-data/en');

    const time_ago_english = new javascript_time_ago('en-US');

    let create_date = new Date(created_at);
    let timeAgo = time_ago_english.format(create_date.getTime());
    debugger
    return (<div key={`answers${answer.id}`} className="container top-boader top-margin-30">
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
              <span className="">{author.description}</span>
            </div>
            <div className="">
              <span>
                <a className="grey" href="#" target="">Answered {timeAgo}</a>
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
        <div className="row add-comment-form ">

        </div>
    </div>

  );


  // return(<div>{answer_html}</div>);

  }
}

// <AnswerForm createAnswer={this.props.createAnswer} />
export default AnswerItem;
