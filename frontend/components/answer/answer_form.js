import React from 'react';
import merge from 'lodash/merge';
import RichTextEditor from 'react-rte';

class AnswerForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: 'text',
        // body: RichTextEditor.createEmptyValue(),
        author_id: currentUser.id,
        question_id: this.props.question.id
    }
    this.update = (body) => this.setState({body});
    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
  }

  handleAnswerSubmit(e){
    e.preventDefault();
    console.log(this.props);

    this.props.createAnswer(this.state);
    // .then(this.setState({body: ''}));
  }

  render(){
    return (
      <button className="PerfectColdButton all-margin-10" onClick={this.handleAnswerSubmit} >
          <span>Submit</span></button>
        )
      }
  //   return (
  //   <div className='form-group'>
  //
  //     <RichTextEditor
  //     id = 'rte'
  //     value={this.state.body}
  //     onChange={this.update}
  //     className="answer-editor"
  //     />
  //
  //     <button className="PerfectColdButton all-margin-10" onClick={this.handleAnswerSubmit} >
  //       <span>Submit</span>
  //     </button>
  //   </div>
  //   )
  // }
}

export default AnswerForm;
