import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// Testing Start
// import * as APIUtil from './util/session_api_util';
// import { login, logout, signup}  from './util/session_api_util';
import { login, logout, signup}  from './actions/session_actions';

// Test Ends
window.login = login;
window.logout = logout;
window.signup = signup;
// window.getState = store.getState;
// window.dispatch = store.dispatch;
document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
  const preloadedState = { session: { currentUser: window.currentUser } };
  store = configureStore(preloadedState);
} else {
  store = configureStore();
}
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
