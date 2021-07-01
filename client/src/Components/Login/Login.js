import React from "react";
import './Login.css';

import UserLogin from './LoginForms/UserLogin';

const Login = () => {
    return (
      <div className="container">
        <div className="auth-wrapper">
            <div className="auth-inner">
                <UserLogin />
            </div>
        </div>
      </div>
    );
};

export default Login;
