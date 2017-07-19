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
        <Switch>
          <AuthRoute path="/login" component={SessionFormContainer} />
          <AuthRoute path="/signup" component={SessionFormContainer} />
        </Switch>
      </div>
    </div>
  </div>
);

// <AuthRoute exact path="/" component={SessionFormContainer} />

// <Route exact path="/" component={SearchContainer} />
export default App;
