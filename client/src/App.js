import React from 'react';
import LoggedInHomePage from './Components/LoggedInHomePage/LoggedInHomePage';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/LoggedInHomePage" component={LoggedInHomePage}/>
    </div>
  );
}

export default App;