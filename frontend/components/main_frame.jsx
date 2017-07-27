import React from 'react'
import {Switch, Route} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import QuestionIndexContainer from './question/question_index_container';
import QuestionDetailContainer from './question/question_detail_container';
import FeedListContainer from './topic/feed_list_container'

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
              <Route path="/" component={FeedListContainer} />
          </div>
          <div className="col-md-8 col-lg-6">
            <Switch>
              <Route exact path="/questions/:questionId" component={QuestionDetailContainer}/>
              <Route exact path="/questions" component={QuestionIndexContainer}/>
              <Route path="/" component={QuestionIndexContainer}/>
            </Switch>
          </div>
          <div className="col-md-2 col-lg-2">
            Subscriptions
          </div>
        </div>
      </div>
    )
  }
}

// <Route path="/questions/:question_id" component={QuestionDetailContainer} />

export default MainFrame
