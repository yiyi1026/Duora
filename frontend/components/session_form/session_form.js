import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      // console.log(currentUser);
      // dispatch(currentUser);
      // this.setState=({this.props.currentUser});
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.props.formType === 'login') {
      this.props.processForm({user});
    }
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    // const user = this.state;
    let user = {
      email: "guest1@guest.com",
      password: 'guest1'
    };
    if (this.props.formType === 'login') {
      this.props.processForm({user});
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
        <div className='col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-0 col-lg-3'>
          <form onSubmit={this.handleSubmit} className="login-form-box row">
            {this.renderErrors()}
            <div className='form-group '>
              <h4 >
                <b>Sign In</b>
              </h4>

              <input id='email' className='form-control' placeholder='Email' value={this.state.email} onChange={this.update('email')}/>
            </div>

            <div className='form-group'>
              <span ></span>
              <input id='password' type='password' className='form-control' value={this.state.password} onChange={this.update('password')} placeholder='Password'/>

            </div>
            <input type="submit" value="Sign In" className='btn wonderful-button pull-right'></input>

          </form>
          <form onSubmit={this.handleDemoSubmit} className="login-form-box row demo-login ">
            <input type="submit" value="Demo Sign In" className='btn wonderful-button pull-right'></input>
          </form>
        </div>
      </div>

    );
    return login_html;
  }
}

export default withRouter(SessionForm);
