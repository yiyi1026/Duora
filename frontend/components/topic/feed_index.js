import React from 'react';
import { RingLoader } from 'react-spinners';
import FeedIndexItem from './feed_index_item'

class FeedIndex extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {loading: true};
  }

  componentDidMount() {
    this.props.requestAllTopics()
    .then(() => this.setState({loading: false}));
  }

  render(){
    if (this.state.loading){
      return (<div className='sweet-loading'>
        <RingLoader
          color={'#123abc'}
          loading={this.state.loading}
        />
    </div>);
    }
    const topics = this.props.topics;

    let all_topics_html = topics.map(
      (topic) => {
        let {id} = topic;
        return (<FeedIndexItem key={`topic${id}`} topic={topic} />);
      });
    return(
      <div className ="all-margin-30">
         <div className='row bottom-padding-10 bottom-boader'>
            <span className="left-margin-10">Feeds</span>
            <span className="pull-right right-margin-60">
            <a className="grey edit" href="#">

            </a>
            </span>
         </div>
        {all_topics_html}
      </div>
    );
  }

}

export default FeedIndex;
