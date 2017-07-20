import React from 'react';
// import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './signup_form/signup_form_container';
import AuthForm from './auth_form';


const App = () => {
  console.log(window.currentUser);
  if (!window.currentUser){
    return (
        <div className='rootDiv'>
          <div className='loginbackground'>
            <div className='container'>
              <header>
                <Link to="/" className="header-link">
                  <h1>Duora</h1>
                </Link>
              </header>

              <Route exact path='/' component={AuthForm} />
            </div>
          </div>
        </div>
      )
    }
    else{
      return (<div className='nobackground'><GreetingContainer /></div>)
    }
};

// <AuthRoute exact path="/" component={SignUpFormContainer} />
// <br />
// <AuthRoute exact path="/" component={SessionFormContainer} />

// <Route exact path="/" component={SearchContainer} />
export default App;
