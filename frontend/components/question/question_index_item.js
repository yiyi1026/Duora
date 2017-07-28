import React from 'react';
import merge from 'lodash/merge';
import {Link, Route} from 'react-router-dom';
import AnswerFormContainer from '../answer/answer_form_container';
import QuestionBarContainer from './question_bar_container';
import javascript_time_ago from 'javascript-time-ago';
import * as SESSIONUTIL from '../../util/session_api_util';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false,
      answers: ''
    };
    // this.toggleDetail = this.toggleDetail.bind(this);
    // this.toggleQuestion = this.toggleQuestion.bind(this);
  }

  handleClickAnswer(e) {
    let $this = $(e.target);
    if (!$this.hasClass('panel-collapsed')) {
      $this.parents('.panel').find('.panel-body').slideUp();
      $this.addClass('panel-collapsed');
    } else {
      $this.parents('.panel').find('.panel-body').slideDown();
      $this.removeClass('panel-collapsed');
    }
  }

  render() {
    // console.log(this.props);
    const {question, updateQuestion, topic} = this.props;
    // console.log(question);
    const {id, title, body, answers, created_at} = question;
    let author = question.author;

    if (!author) {
      author = currentUser;
    }
    let avatar = SESSIONUTIL.getAvatarUrl(author);

    javascript_time_ago.locale(require('javascript-time-ago/locales/en'));
    require('javascript-time-ago/intl-messageformat-global');
    require('intl-messageformat/dist/locale-data/en');

    const time_ago_english = new javascript_time_ago('en-US');
    let create_date = new Date(created_at);
    let timeAgo = time_ago_english.format(create_date.getTime());

    let html = (
      <li key={`questiondetail${id}`}>
        <div className='container well'>
          <div className="row">
            <div className="reason_main">
              Question<span className="bullet">
                ·
              </span>
              <a className="grey" href="#">
                <span >{topic.name}</span>
              </a>
              <span className="bullet">
                ·
              </span>Topic you might like
            </div>
          </div>
          <div className="row all-margin-10">
            <div className="">
              <a className="black bold" href={'#/questions/' + question.id} target="">
                <span className="">{question.title}</span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="">
              <a href="#"><img className="img-circle pull-left" src={avatar} width="40" height="40"/></a>
            </div>
            <div className="left-margin-60">
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
                  <a className="grey" href="#" target="">Asked {timeAgo}</a>
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="all-margin-10">
              <span className="rendered_qtext">
                <p>{question.body}</p>
              </span>
              {/* <span id=""><a className="" href="#" target="_blank">(more)</a></span> */}
            </div>
          </div>

          <div className="row">
            <div className=" accordion-heading">
              <span className="left-margin-10  ">
                <a className="Answer accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href={"#collapse" + question.id} role="button">
                  <span className="glyphicon glyphicon-pencil"></span>Answer
                </a>
              </span>
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
            <div id={"collapse" + question.id} className="accordion-body collapse">
              <AnswerFormContainer question={question}/>

            </div>
          </div>

        </div>
      </li>
    );

    return (html);
  }
}

export default QuestionIndexItem;
