import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Redirect, 
  Switch
} from "react-router-dom";
import './App.css';

import LoggedInHomePage from './Components/LoggedInHomePage/LoggedInHomePage';
import RevenueMain from './Components/RevenueReport/RevenueMain';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';

function App() {
  return (
    <div className="App">
      {/* added a router here -Darron */}
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/home-page' component={LoggedInHomePage}/>
          <Route exact path='/RevenueReport' component={RevenueMain}/>
          <Redirect to='/'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;