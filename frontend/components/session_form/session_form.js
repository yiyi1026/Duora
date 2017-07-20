import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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

  handleDemoSubmit(e) {
    e.preventDefault();
    // const user = this.state;
    let user = {email: "guest1@guest.com", password:'guest1'};
    if (this.props.formType === 'login'){
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
     let login_html = (
           <div className='login'>
             <div className='col-md-3'>
             <form onSubmit={this.handleSubmit} className="login-form-box">
               {this.renderErrors()}
             <div className='form-group '>
               <h4 ><b>Sign In</b></h4>

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
             <input type="submit" value="Sign In" className='btn btn-primary'></input>

           </form>
           <form onSubmit={this.handleDemoSubmit} className="login-form-box demo-login">
             <input type="submit" value="Demo Sign In" className='btn btn-primary'></input>
           </form>
         </div>
       </div>

     );

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

    return login_html;
  }
}

export default withRouter(SessionForm);
