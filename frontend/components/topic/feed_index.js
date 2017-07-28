import React from 'react';
import { RingLoader } from 'react-spinners';

class FeedIndex extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {loading: true};
  }

  componentDidMount() {
    this.props.requestAllTopics()
    .then(setTimeout(() => this.setState({loading: false}), 0));
    // setTimeout(() => this.props.requestAllTopics(), 3000) ;
  }

  // componentWillReceiveProps(nextProps) {
  //   if(!this.props.topics.allIds ){
  //     setTimeout(() => this.props.requestAllTopics(), 8000);
  //   //   // this.props.requestAllTopics();
  //   }
  // }

  render(){
    if (this.setState.loading){
      return (<div className='sweet-loading'>
        <RingLoader
          color={'#123abc'}
          loading={this.state.loading}
        />
    </div>);
    }
    //
    const {topics} = this.props.topics;
    // if (!topics || topics.length == 0) {
    //   return <div id='topicIndexplaceholder'></div>;
    // }
    console.log(this.props);
// return (<div><div><div>hihihi</div></div></div>);
    // let all_topics_html = topics.map(
    //   (topic) => {
    //     if (!topic) {
    //       return <div id='topicIndexplaceholder'></div>;
    //     }
    //     let {id} = topic;
    //     return (<div><div><div>hihihi</div></div></div>);
    //     // return (<FeedIndexItem key={`topic${id}`} topic={topic} />);
    //   });
    return(
      <div className ="all-margin-30">
         <div className='row bottom-padding-10 bottom-boader'>
            <span className="left-margin-30">Feeds</span>
            <span className="pull-right right-margin-60">
            <a className="grey" href="#">
            Edit
            </a>
            </span>
         </div>
         <div className="row">
           what is going on?
            <ul className="nav nav-pills nav-stacked topic-list">
               <li><a href="#">Topic 4</a></li>
            </ul>
         </div>
      </div>
    );
  }

}

export default FeedIndex;
