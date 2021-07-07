import React from 'react';
import LoggedInHomePage from './Components/LoggedInHomePage/LoggedInHomePage';
import RevenueMain from './Components/RevenueReport/RevenueMain';
import ExpenseMain from './Components/ExpenseReports/ExpenseMain';
import {BrowserRouter as Router, Route,Redirect, Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path= '/' component={LoggedInHomePage}/>
          <Route exact path= '/RevenueReport' component={RevenueMain}/>
          <Route exact path= '/ExpenseReport' component={ExpenseMain}/>
          <Redirect to='/'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;