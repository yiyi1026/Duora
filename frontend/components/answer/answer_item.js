import React from 'react';
import {Route} from 'react-router-dom';
import AnswerIndexItem from './answer_index_item';
import AnswerDetailContainer from './answer_detail_container';
class AnswerIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllAnswers();
  }
  render() {
    const {answers, createAnswer, updateAnswer, errors} = this.props;
    // console.log(answers[0]);

    const answerItems = answers.map(
      (newanswer, idx) =>
      // {console.log(answer);
        {
          return (<AnswerIndexItem key={`answers${idx}`} answer={newanswer} updateAnswer={updateAnswer}/>)});
    // const answerItems = {a:3};
    // console.log(answerItems);
    // console.log(answerItems);

    return (
      <div>
        <ul className="answer-list list-unstyled">
          <br/>
          <div>
            <br/> {answerItems}
            <br/>
          </div>
          <br/>
        </ul>
        <Route path="/answers/:answerId" component={AnswerDetailContainer}/>
      </div>

    );

    // { answerItems }
    // return(
    // );
    // <div>
    //   <AnswerForm createAnswer={ createAnswer } errors={ errors }/>
    //   <ul className="answer-list">
    //     { answerItems }
    //   </ul>
    // </div>
    // console.log(this.props);
    // if (this.props.answers){
    //   answers = Object.keys(this.props.answers).map(id => (
    //     <ul key={id}>
    //       <AnswerIndexItem
    //         key={id}
    //         answer={this.props.answers[id]}
    //         deleteAnswer={this.props.deleteAnswer} />
    //     </ul>
    //     )
    //   );
    // }
    // <div className='row'>
    //     <div className='col-lg-4 col-md-4 col-sm-4 colxs-4'>
    //       <Route exact path='/' component={AnswerIndexContainer} />
    //     </div>
    // return(
    //   <div>
    //     <div className='page-header header'>
    //      <h2 className='text-center'>All Answers</h2>
    //     </div>
    //     <div className='row'>
    //       <div className="answerform col-lg-6 col-md-8 col-sm-8 col-xs-8">
    //         {answers}
    //       </div>
    //
    //       <div className='newanswer  col-lg-4 col-md-4 col-sm-4 col-xs-4'>
    //         <Route exact path='/' component={AnswerFormContainer}/>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

// <AnswerForm createAnswer={this.props.createAnswer} />
export default AnswerIndex;
