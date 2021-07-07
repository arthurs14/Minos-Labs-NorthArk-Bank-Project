import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Redirect, 
  Switch,
} from "react-router-dom";
import './App.css';

import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import LoggedInHomePage from './Components/LoggedInHomePage/LoggedInHomePage';
import RevenueMain from './Components/RevenueReport/RevenueMain';
import ExpenseMain from './Components/ExpenseReports/ExpenseMain';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/LoggedInHomePage' component={LoggedInHomePage} />
          <Route path='/RevenueReport' component={RevenueMain} />
          <Route path='/ExpenseReport' component={ExpenseMain}/>
          <Redirect to='/'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;