import React from 'react';
import {Route} from 'react-router-dom';
import QuestionIndexItem from './question_index_item';

class QuestionIndex extends React.Component{
  componentDidMount() {
    this.props.requestAllQuestions();
  }
  render(){
    const { questions, createQuestion, updateQuestion, errors } = this.props;
    console.log(questions);
    // const questionItems = questions.map(question => (
    //     <QuestionIndexItem
    //       key={ `questions${question.id}` }
    //       question={ question }
    //       updateQuestion={ updateQuestion } />
    //   )
    // );

    const questionItems = questions.map((question, idx) => (
      <QuestionIndexItem
          key={ `questions${idx}` }
          question={question}
          updateQuestion={ updateQuestion } />
      )
    );
    // const questionItems = {a:3};
    // console.log(questionItems);
    return (
      <div>
        <ul className="question-list list-unstyled">
          <br />
          <div>
            <br />
          {questionItems}
          <br />
        </div>
        <br />
        </ul>
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
