import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import AuthForm from './auth_form';
import MainFrame from './main_frame';
import Footer from './footer';

const App = () => {
  return (
    <div >
      <ProtectedRoute path='/' component={MainFrame}/>
      <AuthRoute exact path='/login' component={AuthForm}/>
      <div id="bottom"></div>
      <Footer />
    </div>
  );

};

export default App;
