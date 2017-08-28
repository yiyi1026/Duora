import React from 'react';
import {
  Route, withRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SignUpFormContainer from './signup_form/signup_form_container';
import {AuthRoute} from '../util/route_util';
import Footer from './footer';

const AuthForm = () => (
  <div className='loginbackground'>
    <div className="top-margin-80">
      <div className="centered">
        <div className='centered'>
          <div className='logo centered top-margin-30'>
            <a className="navbar-brand brand " href="#">
              <p className='brand'>Duora</p>
            </a>
          </div>
        </div>
        <br/>
        <div className="centered slogan col-xs-12">
          <div>
            <h4>
              <p>A place to share knowledge and better understand the world</p>
              <br/>
              <br/>
            </h4>
          </div>
        </div>
        <div className="container">
          <div className="row signup_login">
            <AuthRoute exact path="/login" component={SignUpFormContainer}/>
            <div className="divider-vertical hidden-xs hidden-sm col-md-1"></div>
            <AuthRoute exact path="/login" component={SessionFormContainer}/>

          </div>
        </div>
        <div className="top-margin-80"></div>
        <Footer />
      </div>
    </div>
  </div>
);

export default withRouter(AuthForm);
