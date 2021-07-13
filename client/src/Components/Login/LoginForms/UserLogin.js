import React from 'react';
import { Link } from 'react-router-dom';
  
const UserLogin = () => {
  return (
    <form className="login-form">
      <h1>NorthArk Bank</h1>
      <h3>Sign In</h3>

      <div className="form-group">
          <label>Email Address</label>
          <input type="email" className="form-control" placeholder="Enter Email" />
      </div>

      <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter Passsword" />
      </div>

      <div className="form-group">
          <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
          </div>
      </div>

      <Link to='/home'><button type="submit" className="btn btn-primary btn-block">Submit</button></Link>
      <div className="forgot password text-right">
          Forgot <Link to='/'>password</Link>
      </div>
      <div className="new user text-right">
          New User <Link onClick={() => console.log('clicked')} to="/signup">Sign Up</Link>
      </div>
    </form>
  );
};

export default UserLogin;