import React from 'react';
import {requestSingleQuestion} from '../../actions/question_actions';
import {Link} from 'react-router-dom';
import AnswerFormContainer from '../answer/answer_form_container';
import AnswerItemContainer from '../answer/answer_item_container';
import javascript_time_ago from 'javascript-time-ago';
import * as SESSIONUTIL from '../../util/session_api_util';

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      id: '',
      waiting: true

    };
  }

  componentDidMount() {
    let id = parseInt(this.props.match.params.questionId);
    this.props.requestSingleQuestion(id).then(() => this.setState({waiting: false}));
  }

  render() {
    const question = this.props.question;
    if (this.state.waiting|| (!question) ){
      return(<div></div>);
    }
    else{

    const {created_at} = question;

    javascript_time_ago.locale(require('javascript-time-ago/locales/en'));
    require('javascript-time-ago/intl-messageformat-global');
    require('intl-messageformat/dist/locale-data/en');

    const time_ago_english = new javascript_time_ago('en-US');

    let create_date = new Date(created_at);
    let timeAgo = time_ago_english.format(create_date.getTime());
    // console.log(question);
    let {description, username} = question.author;
    let avatar = SESSIONUTIL.getAvatarUrl(question.author);
    let {answersIds} = question;
    let answers_html = (<AnswerItemContainer question_id={this.props.currentQuestion}/>)

    return (
      <div>
        <div className='container well'>
          
          <div className="row all-margin-10">
            <div className="">
              <a className="black bold" href={'#/questions/' + question.id} target="">
                <span className="">{question.title}</span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="">
              <a href="#"><img className="img-circle pull-left" src={avatar} width="50" height="50"/></a>
            </div>
            <div className="left-margin-60">
              <div className="">
                <span>
                  <a className="user black" href="#">{username}</a>
                </span>
                <span >,
                </span>
                <span>{description}</span>
              </div>
              <div className="">
                <span>
                  <a className="grey" href="#" target="">Answered {timeAgo}</a>
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="all-margin-10">
              <span className="rendered_qtext">
                <p>{question.body}</p>
              </span>
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

        {answers_html}

      </div>
    );
    }
  }
}

export default QuestionDetail;
