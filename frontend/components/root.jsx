// import React from 'react';
// import { Provider } from 'react-redux';
// import { HashRouter } from 'react-router-dom';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//
// import App from './app';
//
// const Root = ({ store }) => (
//   <Provider store={ store }>
//     <Router history={ hashHistory }>
//       <App />
//     </Router>
//   </Provider>
// );
//
// export default Root;

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
