import React from 'react';
import RichTextEditor from 'react-rte';

class AnswerItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: RichTextEditor.createEmptyValue()
        }

        this.onChange = (value) => this.setState({value});
    }

    handleAnswerSubmit(e){
        e.preventDefault();
        this.props.createQuestion(this.state);
        this.setState({'navigateAfterSubmit': true});
    }

    render(){
        return (
        <div className='form-group'>
          
            <RichTextEditor 
            id = 'rte'
            value={this.state.value}
            onChange={this.onChange} 
            className="answer-editor"
            /> 

            <button className="PerfectColdButton all-margin-10" onClick={this.handleAnswerSubmit} >
                <span>Submit</span>
              </button>
        </div>
        )
    }
}

export default AnswerItem;