import React from 'react'
import {Switch, Route} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import QuestionIndexContainer from './question/question_index_container';
import QuestionDetailContainer from './question/question_detail_container';
import FeedIndexContainer from './topic/feed_index_container';
import TopicDetailContainer from './topic/topic_detail_container';

class MainFrame extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-frame ">
        <Route path='/' component={GreetingContainer}/>
        <div className="container jumbotron">
          <div className="col-md-2 col-lg-2">
              <Route path="/" component={FeedIndexContainer} />
          </div>
          <div className="col-md-8 col-lg-6">
            <br />
            <Switch>
              <Route exact path="/topics/:topicId" component={TopicDetailContainer}/>
              <Route exact path="/questions/:questionId" component={QuestionDetailContainer}/>
              <Route exact path="/questions" component={QuestionIndexContainer}/>
              <Route path="/" component={QuestionIndexContainer}/>
            </Switch>
          </div>
          <div className="col-md-2 col-lg-2 subscriptions">

          </div>
        </div>
      </div>
    )
  }
}

// <Route path="/questions/:question_id" component={QuestionDetailContainer} />

export default MainFrame
