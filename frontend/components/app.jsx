import React from 'react';
import { Provider } from 'react-redux';
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

const App = () => (
  <div className='rootDiv'>
    <div className='container'>
      <header>
        <Link to="/" className="header-link">
          <h1>Duora</h1>
        </Link>
        <GreetingContainer />
      </header>

      <div className='jumbotron'>
        <AuthRoute path="/" component={SignUpFormContainer} />
        <AuthRoute path="/" component={SessionFormContainer} />
      </div>
    </div>
  </div>
);

// <AuthRoute exact path="/" component={SessionFormContainer} />

// <Route exact path="/" component={SearchContainer} />
export default App;
