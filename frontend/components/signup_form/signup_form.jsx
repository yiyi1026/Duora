import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.props.formType === 'signup') {
      this.props.processForm({user}).then((currentUser) => (this.props.history.push(`questions/`)));
    } else {
      return;
    }
  }

  // navLink() {
  //   if (this.props.formType === 'login') {
  //     return <Link to="/signup">sign up </Link>;
  //   } else {
  //     return <Link to="/login">log in </Link>;
  //   }
  // }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    let login_html = (

      <div className='login'>
        <div className='login col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-0 col-lg-3'>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className='form-group'>
              <h4 >
                <b>Sign up</b>
              </h4>
              <input type="text" value={this.state.email} onChange={this.update('email')} className="form-control" placeholder="Email"/>
            </div>
            <div className='form-group '>
              <input type="text" value={this.state.username} onChange={this.update('username')} className="form-control" placeholder="Username"/>
            </div>

            <div className='form-group'>
              <span ></span>
              <input type="password" value={this.state.password} onChange={this.update('password')} className="form-control" placeholder="Password"/>
            </div>
            <input className='btn wonderful-button pull-right' type="submit" value="Sign Up"/>
          </form>
        </div>
      </div>
    );
    //  <button className='btn btn-primary col-lg-offset-9 col-md-offset-9'>Sign Up</button>
    //  signinForm
    //  <div className='login col-md-5 pull-right'>
    //    <div className='col-md-8'>
    //      <form >
    //        <div className='form-group '>
    //          <span ><b>Login</b></span>
    //          <input
    //            id = 'email'
    //            className='form-control'
    //            placeholder='Email'
    //            />
    //        </div>
    //
    //        <div className='form-group'>
    //          <span ></span>
    //          <input
    //            id = 'password'
    //            type='password'
    //            className='form-control'
    //            placeholder='Password' />
    //
    //        </div>
    //        <button className='btn btn-primary col-lg-offset-9 col-md-offset-9'>Login</button>
    //      </form>
    //    </div>
    //  </div>

    //  Please {this.props.formType} or {this.navLink()}
    let original_html = (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Sign Up {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Email:
              <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input"/>
            </label>
            <br/>
            <label>Username:
              <input type="text" value={this.state.username} onChange={this.update('username')} className="login-input"/>
            </label>
            <br/>
            <label>Password:
              <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input"/>
            </label>
            <br/>
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )

    // if (this.props.formType === 'login'){
    //   return(
    //     <div>{login_html}</div>
    //
    //     );
    // } else {
    //   return ( <div>{signup_html}</div> );
    // }
    return login_html;
  }
}

export default withRouter(SignupForm);
