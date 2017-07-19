import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
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
        <div className="container ">
          <div className="row centered">
              <div className="logo">
                <a className="navbar-brand brand" href="#">
                    <span className="brand">Duora</span>
                </a>
              </div>
          </div>
          <div className="row centered">
              <div>A place to share knowledge and better understand the world</div>
          </div>
          <div className="container">
              <div className="row signup_login">
                <div className="signup col-md-6">
                    <div className="row">
                      <a href="#" className="btn btn-danger btn-lg">
                          <span className="glyphicon glyphicon-edit" />
                          <span>Continue with Google</span>
                      </a>
                    </div>
                    <div className="row">
                      <a href="#" className="btn btn-primary btn-lg">
                          <span className="glyphicon glyphicon-edit" />
                          <span>Continue with Facebook</span>
                      </a>
                    </div>
                </div>
                <div className="login col-md-6">
                    <form>
                      <div className="form-group ">
                          <span>
                            <b>Login</b>
                          </span>
                          <input id="email" className="form-control" placeholder="Email" />
                      </div>
                      <div className="form-group">
                          <span />
                          <input id="password" type="password" className="form-control" placeholder="Password" />
                      </div>
                      <button className="btn btn-primary col-lg-offset-9 col-md-offset-9">Login</button>
                    </form>
                </div>
              </div>
          </div>
        </div>



     );

     let original_html= (
       <div classNameName="login-form-container">
          <form onSubmit={this.handleSubmit} classNameName="login-form-box">
            Welcome to Duora
            <br/>
            Please {this.props.formType} or {this.navLink()}
            {this.renderErrors()}
            <div classNameName="login-form">
              <br/>
              <label>Email:
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  classNameName="login-input"
                />
              </label>
              <br/>
                <label>Username:
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    classNameName="login-input"
                  />
                </label>
                <br/>
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  classNameName="login-input"
                />
              </label>
              <br/>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
     )

    if (this.props.formType === 'login'){
      return(
        <div>{login_html}</div>

        );
    } else {
      return ( <div>{signup_html}</div> );
    }
  }
}

export default withRouter(SignupForm);
