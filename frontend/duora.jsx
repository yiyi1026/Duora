import React from 'react';
import ReactDOM from 'react-dom';
// Testing Start
// import * as APIUtil from './util/session_api_util';
import { login }  from './util/session_api_util';

// Test Ends
window.login = login;
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Duora</h1>, root);
});
