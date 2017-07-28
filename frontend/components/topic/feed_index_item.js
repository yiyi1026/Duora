import React from 'react';
import merge from 'lodash/merge';
import {Link, Route} from 'react-router-dom';
import * as SESSIONUTIL from '../../util/session_api_util';

class FeedIndexItem extends React.Component {

  render() {
    console.log(this.props);
    const {feed} = this.props;
    // console.log(question);


    let html = (
      <li key={`feedndetail${id}`}>
        <div className='container well'>
          <div className="row all-margin-10">
            <div className="">
              <a className="black bold" href={'#/topics/' + topic.id} target="">
                <span className="">{topic.name}</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    );

    return (html);
  }
}

export default FeedIndexItem;
