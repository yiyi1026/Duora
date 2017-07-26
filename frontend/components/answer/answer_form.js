import React from 'react';
import merge from 'lodash/merge';
import RichTextEditor from 'react-rte';
import {withRouter} from 'react-router';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // body: 'text',
      rte: RichTextEditor.createEmptyValue(),
      waiting: true
    }
    this.update = (rte) => this.setState({rte});
    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
    // this.update = this.update.bind(this);
  }

  // update(rte) {
  //   console.log(this.props);
  //   this.setState({rte});
  // }

  handleAnswerSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    let question_id = this.props.question.id;
    let answer = {
      body: this.state.rte.toString('html'),
      author_id: this.props.currentUser.id,
      question_id
    }
    this.props.createAnswer(answer).then(() => this.setState({rte: RichTextEditor.createEmptyValue()}));
    // history.pushState(null, '/');
    //how to make this page refresh
    // .then(this.props.history.push(null, `/questions/${this.props.question.id}`));
  // );
  }

  render() {
    return (
      <div className='form-group'>

        <RichTextEditor id='rte' value={this.state.rte} onChange={this.update} className="answer-editor"/>

        <button className="PerfectColdButton all-margin-10" onClick={this.handleAnswerSubmit}>
          <span>Submit</span>
        </button>
      </div>
    )
  }
}

export default withRouter(AnswerForm);
