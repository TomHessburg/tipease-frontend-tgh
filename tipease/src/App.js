import React, { Component } from 'react';
import './App.css';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';

import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/home" component={LandingPage} />
        <Route path="/home/login" component={Login} />
      </div>
    );
  }
}

export default App;
