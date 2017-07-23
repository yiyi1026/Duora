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
    // console.log(id);
    this.props.requestSingleQuestion(id);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    let id = parseInt(this.props.match.params.questionId);
    // console.log(id);
    let nextid = parseInt(nextProps.match.params.questionId);
    if (id !== nextid){
      this.props.requestSingleQuestion(nextid);
    }else{
      console.log(nextProps);
      let question = nextProps.question[0];
      console.log(question);
      this.setState({title: question.title, body: question.body, id: question.id});
    }
  }

  render(){
    console.log(this.props);
    return (
      <div className='questionshow col-lg-12 col-md-12'>
        <div className='question-title center page-header'>
          <span name='title'>
            {this.state.title}
          </span>
        </div>
        <div className='question-body well'>
        <p name='body' >
            {this.state.body}
        </p>
        </div>
        <Link to='/#' className='btn btn-primary'>Go Back
        </Link>
      </div>

    );
  }
}

export default QuestionDetail;
