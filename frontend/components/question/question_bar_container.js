import { connect } from 'react-redux';
import QuestionBar from './question_bar';
import {
  createQuestion,
  searchQuestions
} from '../../actions/question_actions';
import { selectAllQuestions }from '../../reducers/selectors';

const  mapStateToProps = ({question,searchedQuestions}) => {
  return {
    question: selectAllQuestions(question),
    searchedQuestions: selectAllQuestions(searchedQuestions)
  }
};


const mapDispatchToProps = dispatch => ({
  createQuestion: (question) => dispatch(createQuestion(question)),
  searchQuestions: (query) => dispatch(searchQuestions(query))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionBar);
