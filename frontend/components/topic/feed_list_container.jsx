import { connect } from 'react-redux';
import FeedList from './feed_list';

import { selectAllQuestions }from '../../reducers/selectors';

const  mapStateToProps = () => (
  {topic: {}}
);


const mapDispatchToProps = dispatch => ({
  // createQuestion: (question) => dispatch(createQuestion(question))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedList);
