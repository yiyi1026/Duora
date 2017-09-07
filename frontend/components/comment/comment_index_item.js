import React from 'react';
import merge from 'lodash/merge';
import {Link, Route} from 'react-router-dom';
import javascript_time_ago from 'javascript-time-ago';
import * as SESSIONUTIL from '../../util/session_api_util';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false,
      comments: ''
    };
    // this.toggleDetail = this.toggleDetail.bind(this);
    // this.toggleComment = this.toggleComment.bind(this);
  }

  render() {
    const {comment} = this.props;
    const {id, body, updated_at} = comment;
    let author = comment.author;
    const answerId = comment.answer_id;
    if (!author) {
      author = currentUser;
    }
    let avatar = SESSIONUTIL.getAvatarUrl(author);

    javascript_time_ago.locale(require('javascript-time-ago/locales/en'));
    require('javascript-time-ago/intl-messageformat-global');
    require('intl-messageformat/dist/locale-data/en');

    const time_ago_english = new javascript_time_ago('en-US');
    let create_date = new Date(updated_at);
    let timeAgo = time_ago_english.format(create_date.getTime());

    let html = (
      <li className="top-boader all-margin-10 top-padding-10 " key={`commentdetail${id}`}>
        <div className='container '>
          <div className="row">
            <div className="">
              <a href="#"><img className="img-circle pull-left" src={avatar} width="25" height="25"/></a>
            </div>
            <div className="left-margin-30">
              <div className="">
                <span>
                  <a className="user black" href="#">{author.username}</a>
                </span>
              </div>
              <div className="">
                <span>
                  <a className="grey" href="#" target="">Commented {timeAgo}</a>
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="all-margin-10">
              <span className="rendered_qtext">
                <p>{comment.body}</p>
              </span>
              {/* <span id=""><a className="" href="#" target="_blank">(more)</a></span> */}
            </div>
          </div>

          <div className="row">
            <div className=" accordion-heading">
              {/* <span className="left-margin-10  ">
                <a className="Comment accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href={"#collapse" + comment.id} role="button">
                  <span className="glyphicon glyphicon-pencil"></span>Comment on this comment
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
              </span> */}
            </div>
            <div id={"collapse" + comment.id} className="accordion-body collapse">
            </div>
          </div>

        </div>
      </li>
    );

    return (html);
  }
}

export default CommentIndexItem;
