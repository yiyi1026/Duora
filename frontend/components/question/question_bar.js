import React from 'react'

class QuestionBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author_id: currentUser.id,
            // id: -1,
            title: '',
            body: '',
            topic_id: 1
        };

        this.handleQuestionFieldSubmit = this.handleQuestionFieldSubmit.bind(this);
        this.handleQuestionFieldUpdate = this.handleQuestionFieldUpdate.bind(this);
    }
    
    handleQuestionFieldSubmit(e){
        e.preventDefault();
        // console.log(currentUser);
        // console.log(this.state.title);
        this.props.createQuestion(this.state);
    }

    handleQuestionFieldUpdate(){
        return e => this.setState({'title': e.target.value});
    }


    render(){
        return (
        <form className="navbar-form navbar-left">
            <div className="form-group">
            <input type="text" onChange={this.handleQuestionFieldUpdate()} value={this.state.title} id="question_field" className="form-control" placeholder="Ask or Search Duora"/>
            </div>
            <button type="submit" className="btn btn-default" onClick={this.handleQuestionFieldSubmit}>Ask Question</button>
        </form>
        )
    }
}

export default QuestionBar