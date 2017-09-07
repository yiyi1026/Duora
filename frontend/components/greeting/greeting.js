import React from 'react';
import {Link} from 'react-router-dom';
import QuestionBarContainer from '../question/question_bar_container';
import {withRouter} from 'react-router';
import {AuthRoute} from '../../util/route_util';
import * as SESSIONUTIL from '../../util/session_api_util';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const {currentUser, logout} = this.props;
    let avatar = SESSIONUTIL.getAvatarUrl(currentUser);

    const personalGreeting = (
      <div className='col-lg-offset-4'>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand brand-sm" href="#">
                <span className='brand-sm'>Duora</span>
              </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <QuestionBarContainer/>
              <ul className="nav navbar-nav red-text">
                {/* <li className="active">
                  <a href="#" className="active">
                    <span className='glyphicon glyphicon-list-alt'></span>Read
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className='glyphicon glyphicon-edit'></span>Answer</a>
                </li> */}
              </ul>
              <ul className="nav navbar-nav navbar-right">
                {/* <li>
                  <a href="#">
                    <span className='glyphicon glyphicon-bell'></span>Notifications</a>
                </li> */}
                <li className="dropdown ">
                  {/* need to change here for the warning */}
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <a href="#"><img className="img-circle pull-left" src={avatar} width="25" height="25"/></a>
                    {currentUser.username}
                  </a>
                  <ul className="dropdown-menu">
                    {/* <li>
                      <a href="#">Profile</a>
                    </li>
                    <li>
                      <a href="#">Stats</a>
                    </li>
                    <li>
                      <a href="#">Settings</a>
                    </li>
                    <li role="separator" className="divider"></li> */}
                    <li>
                      <a href="#" onClick={logout}>Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </div>
    );

    return (currentUser
      ? personalGreeting
      : (
        <span></span>
      ));
  }
}
export default withRouter(Greeting);
