import LoggedInHomePage from './Components/LoggedInHomePage/LoggedInHomePage';
import RevenueMain from './Components/RevenueReport/RevenueMain';
import {BrowserRouter as Router, Route,Redirect, Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">

      {/* added a router here -Darron */}
      <Router>
        <Switch>
          <Route exact path= '/' component={LoggedInHomePage}/>
          <Route exact path= '/RevenueReport' component={RevenueMain}/>
          <Redirect to='/'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
