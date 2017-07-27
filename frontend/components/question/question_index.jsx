import React from 'react';
import {Route} from 'react-router-dom';
import QuestionIndexItem from './question_index_item';
import QuestionDetailContainer from './question_detail_container';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (this.state.waiting){
      return (<div></div>);
    }
    const {questions, createQuestion, updateQuestion, errors, allQuestionsIds} = this.props;

    const questionItems = allQuestionsIds.map(
      (id, idx) =>
      // {console.log(question);
        { let question = questions[idx];
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

  }
}

// <QuestionForm createQuestion={this.props.createQuestion} />
export default QuestionIndex;
