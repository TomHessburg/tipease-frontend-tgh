import React, { Component } from 'react';
import './App.css';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import ServiceWorkers from './Components/ServiceWorkers';
import Users from './Components/Users';

import Authenticate from './Components/Authenticate/Authenticate.js';

import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/home" component={LandingPage} />
        <Route path="/home/login" component={Login} />

        <Route path="/ServiceWorkers/dashboard" component={Authenticate(ServiceWorkers)} />
        <Route path="/Users/dashboard" component={Authenticate(Users)} />

      </div>
    );
  }
}

export default App;
