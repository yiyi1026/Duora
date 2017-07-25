import {connect} from 'react-redux';
import QuestionBar from './question_bar';
// import { Route, Redirect, withRouter } from 'react-router-dom';
import {createQuestion, searchQuestions} from '../../actions/question_actions';
import {selectAllQuestions, selectSingleQuestion} from '../../reducers/selectors';

const mapStateToProps = (state) => {
  // console.log(state);
  const {question, searchedQuestions, session} = state;
  return {
    // question: selectAllQuestions(question),
    question: selectSingleQuestion(question),
    searchedQuestions: selectAllQuestions(searchedQuestions),
    currentUser: session.currentUser
  }
};

const mapDispatchToProps = dispatch => ({
  createQuestion: (question) => dispatch(createQuestion(question)),
  searchQuestions: (query) => dispatch(searchQuestions(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionBar);
