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

    render(){
        return (
        <div className='form-group'>
          
            <RichTextEditor 
            id = 'rte'
            value={this.state.value}
            onChange={this.onChange} 
            className="answer-editor"
            /> 
            
        </div>
        )
    }
}

export default AnswerItem;