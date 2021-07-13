import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useUser } from '../UserContext/UserContext';
import './Login.css';


const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const { login, signup } = useUser();
    const history = useHistory();

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // depending on sign in or sign up
      if (isSignup) {
        signup(formData, history);
      } else {
        login(formData, history);
      }
      setFormData(initialState);
    };

    const switchMode = () => {
      setIsSignup(prevIsSignup => !prevIsSignup);
    };

    return (
      <div className="container">
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form className="login-form" onSubmit={handleSubmit}>
                  <h1>NorthArk Bank</h1>
                  <h3>Sign In</h3>
                  {
                    isSignup && (
                      <>
                        <div className="form-group">
                          <label htmlFor="First Name">First Name</label>
                          <input 
                            className="form-control"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div><br />
                        <div className="form-group">
                          <label htmlFor="Last Name">Last Name</label>
                          <input 
                            className="form-control"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div><br />
                      </>
                    )
                  }
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      className="form-control"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange} 
                    />                    
                  </div><br />
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                      className="form-control"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div><br />
                  {
                    isSignup && (
                      <div className="form-group">
                        <label htmlFor="Confirm Password">Confirm Password</label>
                        <input 
                          className="form-control"
                          name="confirmPassword"
                          type="password"
                          placeholder="Re-Enter Password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                      </div>
                    )
                  }
                  <br />
                  <button 
                    className="btn btn-primary btn-block"
                    type="submit">
                      { isSignup ? 'Sign Up' : 'Sign In' }
                  </button><br /><br />
                  <div className="new user text-right" onClick={switchMode}>
                    { 
                      isSignup 
                        ? 'Have an Account? Sign In' 
                        : 'Don\'t have an account? Sign Up' 
                    }
                  </div>
                </form>
            </div>
        </div>
      </div>
    );
};

export default Login;
