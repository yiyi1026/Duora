import {connect} from 'react-redux';
import QuestionBar from './question_bar';
// import { Route, Redirect, withRouter } from 'react-router-dom';
import {createQuestion, searchQuestions} from '../../actions/question_actions';
import {selectAllQuestions, selectSingleQuestion, selectSearchedQuestions} from '../../reducers/selectors';

const mapStateToProps = (state) => {
  const {questions, session} = state;
  return {
    questions: questions,
    currentUser: session.currentUser
  }
};

const mapDispatchToProps = dispatch => ({
  createQuestion: (question) => dispatch(createQuestion(question)),
  searchQuestions: (query) => dispatch(searchQuestions(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionBar);
