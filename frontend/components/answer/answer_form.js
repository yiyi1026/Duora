import React from 'react';
import merge from 'lodash/merge';
import RichTextEditor from 'react-rte';
import {withRouter} from 'react-router';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // body: 'text',
      rte: RichTextEditor.createEmptyValue()
    }
    // this.update = (rte_value) => this.setState({rte_value});
    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
  }

  update(rte) {
    this.setState({rte});
  }

  handleAnswerSubmit(e) {
    let answer = {
      body: this.state.rte.toString('html'),
      author_id: currentUser.id,
      question_id: this.props.question.id
    }
    this.props.createAnswer(answer).then(this.setState({rte: RichTextEditor.createEmptyValue()})).then(this.props.history.push(`/questions/${this.props.question.id}`));
  }

  render() {
    return (
      <div className='form-group'>

        <RichTextEditor id='rte' value={this.state.rte} onChange={this.update.bind(this)} className="answer-editor"/>

        <button className="PerfectColdButton all-margin-10" onClick={this.handleAnswerSubmit}>
          <span>Submit</span>
        </button>
      </div>
    )
  }
}

export default withRouter(AnswerForm);
