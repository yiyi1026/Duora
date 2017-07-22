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
    const { question , updateQuestion } = this.props;
    const { title, body, author, answers } = question;
    let detail;
    console.log(question.title);
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
      )
    );
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
    return (
      <ul key={`questionItem${question.title}`}>
        {question.title}
        <li key={`question${question.id}`}>{question.body}</li>
        <ul key={`answer${question.id}`}>
          {answerList}
        </ul>
      </ul>
    );
  }
}

export default QuestionIndexItem;
