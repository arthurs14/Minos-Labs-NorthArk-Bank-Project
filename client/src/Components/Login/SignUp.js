import React from "react";
import './Login.css';

import UserSignUp from './LoginForms/UserSignUp';

const SignUp = () => {
  return (
    <div className="container">
      <div className="auth-wrapper">
          <div className="auth-inner">
              <UserSignUp />
          </div>
      </div>
    </div>
  );
};

export default SignUp;