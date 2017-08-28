import React from 'react';
import {Route} from 'react-router-dom';
import Modal from 'react-bootstrap-modal';
import QuestionIndexItem from './question_index_item';
import QuestionDetailContainer from './question_detail_container';
import { RingLoader } from 'react-spinners';
import * as SESSIONUTIL from '../../util/session_api_util';
import TopicEditFormContainer from '../topic/topic_edit_form_container';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      topic_id: 1,
      topics: [],
      showModal: false,
      loading: true
    };
      this.setState = this.setState.bind(this);
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
      this.handleQuestionFieldSubmit = this.handleQuestionFieldSubmit.bind(this);
      this.handleQuestionFieldUpdate = this.handleQuestionFieldUpdate.bind(this);
      this.handleStateChange = this.handleStateChange.bind(this);
      this.handleQuestionTopicsUpdate = this.handleQuestionTopicsUpdate.bind(this);
    }


  handleStateChange(newvalue) {
    this.setState(newvalue)
  };

  componentDidMount() {
    let topicId = this.props.match.params.topicId;
    if (topicId){
      this.props.requestSingleTopic(topicId).then(
        () => this.setState({loading: false})
      );
    }else{
      this.props.requestAllQuestions()
      .then(
        () => this.setState({loading: false})
      )
    }
  }

  handleQuestionTopicsUpdate(topics){
    let firstTopicId = topics[0].id
    this.setState({topic_id: firstTopicId, topics: topics})
  }

  handleQuestionFieldSubmit(e) {
    e.preventDefault();
    if(this.state.title){
      this.props.createQuestion(this.state)
        .then(() => this.setState({title: '', showModal: false}));
    }
  }

  handleQuestionFieldUpdate(e) {
    return e => {
      this.setState({'title': e.target.value});
      if (!this.state.author_id) {
        this.setState({author_id: this.props.currentUser.id});
      }
    };
  }

  close(){
    this.setState({ showModal: false });
  }

  open(){
    this.setState({ showModal: true });
  }

  render() {
    let currentUser = this.props.currentUser;
    let topics = this.props.topics;
    if (this.state.loading){
      return (<div className='sweet-loading'>
         <RingLoader
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>);
    }
    const {questions, createQuestion, updateQuestion, errors, allQuestionsIds} = this.props;
    const questionItems = allQuestionsIds.map(
      (id, idx) =>
        { let question = questions[idx];
          let topic = topics.byId[question.topic_id]
          return (<QuestionIndexItem key={`indexquestions${id}`} question={question} updateQuestion={updateQuestion} topic={topic}/>);
  });

    return (
      <div>
        <div className='container well'>
            <span >
              <a className="add-comment-form-item" href="#"><img className="img-circle pull-left" src={SESSIONUTIL.getAvatarUrl(currentUser)} width="25" height="25"/></a>
            </span>
            <span>
              <a className="user grey" href="#">{currentUser.username}</a>
            </span>
            <div>
              <a className="askquestion grey font-size-18 bold"
                onClick={this.open}>
              What is your question?
              </a>

              <Modal id="askQuestionModal" show={this.state.showModal} onHide={this.close} >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                  <span >
                    <a className="add-comment-form-item" href="#"><img className="img-circle pull-left" src={SESSIONUTIL.getAvatarUrl(currentUser)} width="25" height="25"/></a>
                  </span>
                  <span>
                    <a className="user grey" href="#">{currentUser.username}</a>
                  </span>
                  <div>
                    <input type="text" onChange={this.handleQuestionFieldUpdate()} value={this.state.title}
                      className="askquestion font-size-18 bold no-border top-margin-10"
                      placeholder='What is your question?'/>
                  </div>

                  <TopicEditFormContainer triggerQuestionTopicsUpdate={this.handleQuestionTopicsUpdate}/>
                </Modal.Body>
                <Modal.Footer>
                  <button type="button" className="PerfectColdButton" onClick={this.handleQuestionFieldSubmit}>Ask Question</button>
                </Modal.Footer>

                </Modal>
              </div>
        </div>
        <ul className="question-list list-unstyled">
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

export default QuestionIndex;
