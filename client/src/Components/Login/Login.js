import React from "react";
import './Login.css';

import UserLogin from './LoginForms/UserLogin';

const Login = () => {
    return (
      <div className="auth-wrapper">
          <div className="auth-inner">
              <UserLogin />
          </div>
      </div>
    );
};

export default Login;
