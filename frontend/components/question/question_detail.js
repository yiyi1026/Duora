import React from 'react';
import {requestSingleQuestion} from '../../actions/question_actions';
import {Link} from 'react-router-dom';
import AnswerFormContainer from '../answer/answer_form_container';
import AnswerItemContainer from '../answer/answer_item_container';

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      id: ''

    };
  }

  componentDidMount() {
    // console.log(this.props);
    let id = parseInt(this.props.match.params.questionId);
    // console.log(this.props);
    this.props.requestSingleQuestion(id);
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props);
    console.log(nextProps);
    let id = parseInt(this.props.match.params.questionId);
    let nextid = parseInt(nextProps.match.params.questionId);
    if (id !== nextid) {
      this.props.requestSingleQuestion(nextid);
    }else{
      let question = nextProps.questions.byId;
      // let title = question.title
      let {title, body, id, author} = question;

      this.setState({title, body, id, author});
    }
  }

  render() {
    console.log(this.props);
    const {answers} = this.props;
    const question = this.props.questions.byId;
    if(!question.author){
      return (<div></div>);
    }

    let {description, username} = question.author;
    let avatar = '/images/avatar/' + question.author.avatar;

    let answers_html = answers.byId.map(
      (answer, idx) =>
        {
          return (<AnswerItemContainer key={`answer${idx}`} answer={answer} />)
      });

    return (
      <div>
        <div className='container well'>
          <div className="row">
            <div className="reason_main">
              Answer<span className="bullet">
                ·
              </span>
              <a className="grey" href="#">
                <span >Interpersonal Interaction</span>
              </a>
              <span className="bullet">
                ·
              </span>Topic you might like
            </div>
          </div>
          <div className="row all-margin-10">
            <div className="">
              <a className="black bold" href={'#/questions/' + question.id} target="">
                <span className="">{question.title}</span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="">
              <a href="#"><img className="img-circle pull-left" src={avatar} width="50" height="50"/></a>
            </div>
            <div className="left-margin-60">
              <div className="">
                <span>
                  <a className="user black" href="#">{username}</a>
                </span>
                <span >,
                </span>
                <span>{description}</span>
              </div>
              <div className="">
                <span>
                  <a className="grey" href="#" target="">Answered 8h ago</a>
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="all-margin-10">
              <span className="rendered_qtext">
                <p>{question.body}</p>
              </span>
              {/* <span id=""><a className="" href="#" target="_blank">(more)</a></span> */}
            </div>
          </div>

          <div className="row">
            <div className=" accordion-heading">
              <span className="left-margin-10  ">
                <a className="Answer accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href={"#collapse" + question.id} role="button">
                  <span className="glyphicon glyphicon-pencil"></span>Answer
                </a>
              </span>
              <span className="left-margin-10">
                <a className="Upvote" href="#">
                  <span>Upvote</span>
                  <span className="divider-vertical-15px"></span>
                  <span className=" ">95</span>
                </a>
              </span>
              <span className="left-margin-10">
                <a className="Downvote grey" href="#">
                  <span className=" ">Downvote</span>
                </a>
              </span>
            </div>
            <div id={"collapse" + question.id} className="accordion-body collapse">
              <AnswerFormContainer question={question}/>

            </div>
          </div>



        </div>

        {answers_html}

      </div>
    );

  }
}

export default QuestionDetail;
