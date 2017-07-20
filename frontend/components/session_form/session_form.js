import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
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
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.props.formType === 'login'){
      this.props.processForm({user});
    }
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up </Link>;
    } else {
      return <Link to="/login">log in </Link>;
    }
  }

  renderErrors() {
    return(
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
     let signup_html = (
      <div>
        123
      </div>
     );

     let login_html = (
       <div className='login col-md-5 pull-right'>
         <div className='col-md-8'>
         <form >
         <div className='form-group '>
           <span ><b>Sign In</b></span>
           <input
             id = 'email'
             className='form-control'
             placeholder='Email'
             />
         </div>

         <div className='form-group'>
           <span ></span>
           <input
             id = 'password'
             type='password'
             className='form-control'
             placeholder='Password' />

         </div>
         <input type="submit" value="Sign In" className='btn btn-primary col-lg-offset-9 col-md-offset-9'></input>
       </form>
     </div>
   </div>


     );
    //  <input className='btn btn-primary col-lg-offset-9 col-md-offset-9' type="submit" value="Sign In" />

     let original_html= (
       <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            Sign In
            <br/>
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              <label>Email:
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              </label>
              <br/>

              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br/>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
     )

    //  no user need for logging in
    //  <label>Username:
    //    <input type="text"
    //      value={this.state.username}
    //      onChange={this.update('username')}
    //      className="login-input"
    //    />
    //  </label>
    //  <br/>

    return login_html;
  }
}

export default withRouter(SessionForm);
