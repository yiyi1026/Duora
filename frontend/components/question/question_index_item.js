import React from 'react';
// import QuestionDetailViewContainer from './question_detail_view_container';
import merge from 'lodash/merge';
import { Link, Route } from 'react-router-dom';
import AnswerItem from '../answer/answer_item';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false };
    // this.toggleDetail = this.toggleDetail.bind(this);
    // this.toggleQuestion = this.toggleQuestion.bind(this);
  }

  handleClickAnswer(e){
    console.log(e.target);
    let $this = $(e.target);
    console.log($this.hasClass("Answer"));
    if(!$this.hasClass('panel-collapsed')) {
      $this.parents('.panel').find('.panel-body').slideUp();
      $this.addClass('panel-collapsed');
    } else {
		  $this.parents('.panel').find('.panel-body').slideDown();
		  $this.removeClass('panel-collapsed');
	  }
  }
  // toggleDetail(e) {
  //   e.preventDefault();
  //   this.setState({
  //     detail: !this.state.detail
  //   });
  // }
  //
  // toggleQuestion(e) {
  //   e.preventDefault();
  //   const toggledQuestion = merge({}, this.props.question
  //     // , {done: !this.props.question.done}
  //  );
  //    this.props.updateQuestion(toggledQuestion);
  // }

  render() {
    console.log(this.props);
    // console.log(this.props.question);
    const { question , updateQuestion} = this.props;
    // const answers = question.answers;
    // console.log(question);
    const {id, title, body, answers, author} = question;

    // const answer_detail = answers
    // console.log(question_detail);
    // console.log(question);
    // // const { title, body, author} = question;
    // let detail;
    // console.log(question.title);
    // console.log('index item');
    // console.log(question);
    // console.log('jhere');

    // if (this.state.detail) {
    //   detail = <QuestionDetailViewContainer question={question} />;
    // }

    // let ret = (
      // <li className="question-index-item">
      //   <div className="question-header">
      //     <h3><a onClick={this.toggleDetail}>{title}</a></h3>
      //     <button
      //       className={done ? "done" : "undone"}
      //       onClick={this.toggleQuestion}>
      //       {done ? "Undo" : "Done"}
      //     </button>
      //   </div>
      //   {detail}
      // </li>
    // );
    const avatar = '/images/avatar/user_' + author.id + '.png';
    // const avatar = '<%= asset_path "images/avatar/user_1.png" %>';
    let html = (
      <li>
        <div className='container well'>
          <div className="row">
            <div className="reason_main">
              Answer<span className="bullet"> · </span>
              <a className="grey" href="#" ><span >Interpersonal Interaction</span></a>
              <span className="bullet"> · </span>Topic you might like
            </div>
          </div>
          <div className="row all-margin-10">
            <div className="">
              <a className="black bold" href="#" target="_blank" ><span className="">{question.title}</span></a>
            </div>
          </div>
          <div className="row">
            <div className="">
              <a href="#"><img className="img-circle pull-left" src={avatar} width="50" height="50" /></a>
            </div>
            <div className="left-margin-60">
              <div className="">
                <span><a className="user black" href="#">{author.username}</a></span>
                <span >, </span><span>{author.description}</span>
              </div>
              <div className=""><span><a className="grey" href="#" target="_blank">Answered 8h ago</a></span></div>
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
                <a className="Answer accordion-toggle"
                data-toggle="collapse"
                data-parent="#accordion2"
                href= {"#collapse" + question.id }
                role="button" >
                  <span className="glyphicon glyphicon-pencil"></span>Answer
                </a>
              </span>
              <span className="left-margin-10">
              <a className="Upvote" href="#" >
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
            <div  id={"collapse" + question.id } className="accordion-body collapse">
              <AnswerItem />
              <a className="PerfectColdButton left-margin-10" href="#" >
                <span>Submit</span>
              </a>
            </div>
          </div>

        </div>
      </li>
    );

    return (
      html
    );
  }
}

export default QuestionIndexItem;
