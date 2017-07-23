import React from 'react';
import { requestSingleQuestion } from '../../actions/question_actions';
import { Link } from 'react-router-dom';

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      id: '',
      answers: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    let id = parseInt(this.props.match.params.questionId);
    console.log(id);
    this.props.requestSingleQuestion(id);
    // console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    let id = parseInt(this.props.match.params.questionId);
    let nextid = parseInt(nextProps.match.params.questionId);
    console.log(nextProps);
    if (id !== nextid){
      this.props.requestSingleQuestion(nextid);
    }else{
      let question = nextProps.question[0];
      // console.log(question);
      this.setState({title: question.title, body: question.body, id: question.id});
    }
  }

  render(){
    console.log(this.props);
    return (
      <div className='questionshow col-lg-12 col-md-12'>
        <div className='question-title center page-header'>
          <span name='title'>
            a
          </span>
        </div>
        <div className='question-body well'>
        <p name='body' >
            b
        </p>
        </div>
        <Link to='/#' className='btn btn-primary'>Go Back
        </Link>
      </div>

    );
  }
}

export default QuestionDetail;
