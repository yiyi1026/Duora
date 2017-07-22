import React from 'react';
// import QuestionDetailViewContainer from './question_detail_view_container';
import merge from 'lodash/merge';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false };
    // this.toggleDetail = this.toggleDetail.bind(this);
    // this.toggleQuestion = this.toggleQuestion.bind(this);
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
    const { question , updateQuestion} = this.props;
    const answers = question.answers;
    // // const { title, body, author} = question;
    // let detail;
    // console.log(question.title);
    // console.log('index item');
    // console.log(question);
    // console.log('jhere');
    let answerList = answers.map(answer => (
        <li key={`answer${answer.id}`}>
          <br/>
          {answer.author_id}
          <br/>
          {answer.body}
        </li>
      ));

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

    let original_html = (
      <ul key={`questionItem${question.title}`}>
        {question.title}
        <li key={`question${question.id}`}>{question.body}</li>
        <ul key={`answer${question.id}`}>
          {answerList}
        </ul>
      </ul>
    );

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
              <a href="#"><img className="img-circle pull-left" src="https://avatars3.githubusercontent.com/u/22781373?v=4&amp;s=40" width="50" height="50" /></a>
            </div>
            <div className="left-margin-60">
              <div className="">
                <span><a className="user black" href="#">Vivian</a></span>
                <span >, </span><span>Time traveler, artificial sweetener</span>
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
            <div className=" ">
              <a className="Upvote btn" href="#" >
                <span>Upvote</span>
                <span className="divider-vertical-15px"></span>
                <span className=" ">95</span>
              </a>
              <span className="left-margin-10">
                <a className="Downvote grey" href="#">
                  <span className=" ">Downvote</span>
                </a>
              </span>
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
