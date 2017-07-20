import React from 'react';
// import { Provider } from 'react-redux';
import {
  Route,
  // Redirect,
  // Switch,
  Link,
  // HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SignUpFormContainer from './signup_form/signup_form_container';
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';
import { AuthRoute } from '../util/route_util';
// import { ProtectedRoute } from '../util/route_util';

// const AuthForm = () =>   {
//   <div className="container">
//     <div className='row centered'>
//     <div className='logo'>
//       <a className="navbar-brand brand" href="#"><span className='brand'>Duora</span></a>
//       </div>
//     </div>
//     <div className="row centered slogan">
//       <div>
//         <p> </p>
//         <h4>A place to share knowledge and better understand the world</h4>
//         <p> </p>
//       </div>
//       </div>
//       <div className="container">
//          <div className="row signup_login">
//
//               <AuthRoute exact path="/" component={SignUpFormContainer} />
//
//            <div className="divider-vertical"></div>
//              <AuthRoute exact path="/" component={SessionFormContainer} />
//          </div>
//        </div>
//   </div>
// );
const AuthForm = () => (
    <div className="container">
      <div className="centered">
      <div className='centered'>
      <div className='logo centered'>
        <a className="navbar-brand brand" href="#"><p className='brand'>Duora</p></a>
        </div>
      </div>
      <br/>
      <div className="centered slogan">
        <div>
          <h4><p>A place to share knowledge and better understand the world</p></h4>

          <p> </p>
        </div>
        </div>
        <div className="container">
           <div className="row signup_login">

             <AuthRoute exact path="/" component={SignUpFormContainer} />
             <div className="divider-vertical col-md-1"></div>
             <AuthRoute exact path="/" component={SessionFormContainer} />
           </div>
         </div>
       </div>
      </div>
    );
//loginForm
// <div className='login col-md-5 pull-right'>
//   <div className='col-md-8'>
//   <form >
//     <div className='form-group '>
//       <span ><b>Login</b></span>
//       <input
//         id = 'email'
//         className='form-control'
//         placeholder='Email'
//         />
//     </div>
//
//     <div className='form-group'>
//       <span ></span>
//       <input
//         id = 'password'
//         type='password'
//         className='form-control'
//         placeholder='Password' />
//
//     </div>
//     <button className='btn btn-primary col-lg-offset-9 col-md-offset-9'>Login</button>
//   </form>
//   </div>
// </div>

//signupForm
// <div className='login col-md-5'>
//   <div className='col-md-8'>
//   <form >
//     <div className='form-group '>
//       <span ><b>Sign up</b></span>
//       <input type="text"
//         value={this.state.email}
//         onChange={this.update('email')}
//         className="form-control"
//       />
//     </div>
//     <div className='form-group '>
//       <input type="text"
//         value={this.state.username}
//         onChange={this.update('username')}
//         className="form-control"
//       />
//     </div>
//
//     <div className='form-group'>
//       <span ></span>
//       <input type="password"
//         value={this.state.password}
//         onChange={this.update('password')}
//         className="form-control"
//       />
//     </div>
//   <button className='btn btn-primary col-lg-offset-9 col-md-offset-9'>Sign Up</button>
//   </form>
//  </div>
// </div>
// <div className='jumbotron'>
//   <br />
//   <AuthRoute exact path="/" component={SessionFormContainer} />
// </div>
export default AuthForm;
