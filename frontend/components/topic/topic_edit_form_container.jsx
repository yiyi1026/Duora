import { connect } from 'react-redux';
import TopicEditForm from './topic_edit_form';
import {searchTopics} from '../../actions/topic_actions';

const  mapStateToProps = ({topics,searchIds}) => (
  {topics: topics,
    searchIds:searchIds}
);


const mapDispatchToProps = dispatch => ({
  searchTopics: (question) => dispatch(searchTopics(question))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicEditForm);
