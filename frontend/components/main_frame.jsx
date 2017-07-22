import React from 'react'
import {Route} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import QuestionIndexContainer from './question/question_index_container';

class MainFrame extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className="main-frame ">
            
            <Route path='/' component={GreetingContainer} />
             <div className="jumbotron"> 
                <div className="col-md-2 col-lg-2">
                    Feeds
                </div>  
                <div className="col-md-8 col-md-8">
                    <Route path="/" component={QuestionIndexContainer} />
                </div>
                <div className="col-md-2 col-lg-2">
                    Subscriptions
                </div>
            </div>
        </div>

        )
    }
}

export default MainFrame