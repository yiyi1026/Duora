import React from 'react';
import {withRouter} from 'react-router';

class QuestionBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // author_id: currentUser.id,
            // id: -1,
            title: '',
            body: '',
            topic_id: 1
        };

        this.handleQuestionFieldSubmit = this.handleQuestionFieldSubmit.bind(this);
        this.handleQuestionFieldUpdate = this.handleQuestionFieldUpdate.bind(this);
        this.handleSearchQuestions = this.handleSearchQuestions.bind(this);
        this.navigateTo = this.navigateTo.bind(this);
    }

    navigateTo(location){
        this.props.history.push(location);
    }

    handleQuestionFieldSubmit(e){
        e.preventDefault();
        this.props.createQuestion(this.state);
        this.setState({'navigateAfterSubmit': true});
    }

    handleQuestionFieldUpdate(){
        return e => {
            this.setState({'title': e.target.value});
            if(e.target.value){
                this.handleSearchQuestions(e.target.value);
            }
            if(currentUser){
              author_id = currentUser.id;
            }
        };
    }

    handleSearchQuestions(query){
        this.props.searchQuestions(query);
    }

    componentWillReceiveProps(nextProps) {
        let cur_question = this.props.question[0];
        let next_question = nextProps.question[0];
        if(cur_question)console.log(cur_question.id)
        if(next_question)console.log(next_question.id)
        if(!cur_question && next_question ||
            cur_question && cur_question.id !== next_question.id){
            this.setState({title: ''});
            this.navigateTo('/questions/' + next_question.id );
        }
    }

    render(){
        const querystr = this.state.title;
        let reg = new RegExp(querystr, 'gi');

        let searchedQuestionsForm = '';
        let searchedQuestions = this.props.searchedQuestions.map((question) => {
            // let final_str = question.title.replace(reg, function(str) {return (<b>{str}</b>)});
            let final_str = question.title.replace(reg, function(str) {return '<b class="matchingText">'+str+'</b>'});

            return (<li key={question.id} className="search_question_dropdown_item">
                <a href={"#/questions/"+ question.id } className="grey">
                    <span dangerouslySetInnerHTML={{__html: final_str}}>
                    </span>
                </a>
            </li>)
        }
        );
        if (searchedQuestions.length > 0 && this.state.title.length>0){
            searchedQuestionsForm = (
                <ul className="search_question_dropdown ">
                {searchedQuestions}
                </ul>
            );

        } else {
            searchedQuestionsForm = '';
        }
        return (
        <form className="navbar-form navbar-left dropdown">
            <div className="form-group">
            <input type="text" data-toggle="dropdown" onChange={this.handleQuestionFieldUpdate()} value={this.state.title} id="question_field" className="form-control dropdown-toggle" placeholder="Ask or Search Duora"/>

                {searchedQuestionsForm}
            </div>
            <button type="submit" className="btn btn-default" onClick={this.handleQuestionFieldSubmit}>Ask Question</button>

        </form>
        )
    }
}

export default withRouter(QuestionBar)
