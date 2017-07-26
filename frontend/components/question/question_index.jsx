import React from 'react';
import {Route} from 'react-router-dom';
import QuestionIndexItem from './question_index_item';
import QuestionDetailContainer from './question_detail_container';
class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // questions: this.props.questions,
      waiting: true
    };
      this.setState = this.setState.bind(this);
    }
  componentDidMount() {
    this.props.requestAllQuestions()
    .then(
      () => this.setState({waiting: false})
    );
  }
  render() {
    // console.log(getState());
    // console.log(this.props);
    if (this.state.waiting){
      // console.log(this.props);
      return (<div></div>);
    }
    // console.log(this.props);
    const {questions, createQuestion, updateQuestion, errors, allQuestionsIds} = this.props;

    const questionItems = allQuestionsIds.map(
      (id, idx) =>
      // {console.log(question);
        { let question = questions[id];
          return (<QuestionIndexItem key={`indexquestions${id}`} question={question} updateQuestion={updateQuestion}/>);
  });  // const questionItems = {a:3};

    return (
      <div>
        <ul className="question-list list-unstyled">
          <br/>
          <div className='indexquestions'>
            {questionItems}

          </div>
          <br/>
        </ul>
        <Route path="/questions/:questionId" component={QuestionDetailContainer}/>
      </div>

    );

    // { questionItems }
    // return(
    // );
    // <div>
    //   <QuestionForm createQuestion={ createQuestion } errors={ errors }/>
    //   <ul className="question-list">
    //     { questionItems }
    //   </ul>
    // </div>
    // console.log(this.props);
    // if (this.props.questions){
    //   questions = Object.keys(this.props.questions).map(id => (
    //     <ul key={id}>
    //       <QuestionIndexItem
    //         key={id}
    //         question={this.props.questions[id]}
    //         deleteQuestion={this.props.deleteQuestion} />
    //     </ul>
    //     )
    //   );
    // }
    // <div className='row'>
    //     <div className='col-lg-4 col-md-4 col-sm-4 colxs-4'>
    //       <Route exact path='/' component={QuestionIndexContainer} />
    //     </div>
    // return(
    //   <div>
    //     <div className='page-header header'>
    //      <h2 className='text-center'>All Questions</h2>
    //     </div>
    //     <div className='row'>
    //       <div className="questionform col-lg-6 col-md-8 col-sm-8 col-xs-8">
    //         {questions}
    //       </div>
    //
    //       <div className='newquestion  col-lg-4 col-md-4 col-sm-4 col-xs-4'>
    //         <Route exact path='/' component={QuestionFormContainer}/>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

// <QuestionForm createQuestion={this.props.createQuestion} />
export default QuestionIndex;
