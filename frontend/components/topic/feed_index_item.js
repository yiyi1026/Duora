import React from 'react';
import merge from 'lodash/merge';
import {Link, Route} from 'react-router-dom';
import * as SESSIONUTIL from '../../util/session_api_util';

class FeedIndexItem extends React.Component {

  render() {
    const {topic} = this.props;

    let html = (
      <div className="row all-margin-10 " key={`feedndetail${topic.id}`}>
        <a className="black opacity-80 left-margin-10 " href={'#/topics/' + topic.id} target="">
          <span className="font-size-13">{topic.name}</span>
        </a>
      </div>
    );

    return (html);
  }
}

export default FeedIndexItem;
