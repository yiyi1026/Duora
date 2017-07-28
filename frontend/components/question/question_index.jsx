import React from 'react';
import {Route} from 'react-router-dom';
import QuestionIndexItem from './question_index_item';
import QuestionDetailContainer from './question_detail_container';
import { RingLoader } from 'react-spinners';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
      this.setState = this.setState.bind(this);
    }
  componentDidMount() {
    this.props.requestAllQuestions()
    .then(
      () => this.setState({loading: false})
    );
  }
  render() {
    if (this.state.loading){
      return (<div className='sweet-loading'>
        <PropagateLoader
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>);
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
