import React from 'react';
import { RingLoader } from 'react-spinners';
import QuestionIndexItem from '../question/question_index_item'
class TopicDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      id: '',
      loading: true

    };
  }

  componentDidMount() {
    let id = parseInt(this.props.match.params.topicId);
    this.props.requestSingleTopic(id)
    .then(() => this.setState({loading: false}));
  }

  componentWillReceiveProps(nextProps) {
    let nextId = nextProps.match.params.topicId;
    let currId = this.props.match.params.topicId;
    if (nextId !== currId){
      this.props.requestSingleTopic(nextId).then(() => this.setState({loading: false}));
    }
  }

  render() {
    if (this.state.loading ){
      return(<div className='sweet-loading'>
        <RingLoader
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>);
    }

    const topicId = this.props.currentTopic;
    const topic = this.props.topics.byId[topicId];
    const {questions} = topic;
    const questionItems = questions.map(
      (question) =>
        (<QuestionIndexItem key={`indexquestions${question.id}`} question={question}/>)
    );

    return(
      <div className='topicdetail'>
        <div className='well'>
          <span>Questions associated with topic <span className='topic-pill'>{topic.name}</span></span>
        </div>
        <ul className="question-list list-unstyled">
          <div className='indexquestions'>
            {questionItems}
          </div>
          <br/>
        </ul>
      </div>    
    );
  }
}

export default TopicDetail;
