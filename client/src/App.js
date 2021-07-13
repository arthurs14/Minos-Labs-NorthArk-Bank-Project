import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";

import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import LoggedInHomePage from "./Components/LoggedInHomePage/LoggedInHomePage";
import RevenueMain from "./Components/RevenueReport/RevenueMain";
import ExpenseMain from "./Components/ExpenseReports/ExpenseMain";
import UserProvider from "./Components/UserContext/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={LoggedInHomePage} />
            <Route path="/revenue-report" component={RevenueMain} />
            <Route path="/expense-report" component={ExpenseMain} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
