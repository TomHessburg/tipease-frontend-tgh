import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import ServiceWorkers from "./Components/ServiceWorkers";
import Users from "./Components/Users";
import EditAccountModal from "./Components/ServiceWorkers/EditAccountModal/EditAccountModal.js";
import SignUp from "./Components/SignUp";
import SWProfile from "./Components/SWProfile/SWProfile.js";
import EditAccountModalUsers from "./Components/Users/EditAccountModal/EditAccountModal.js";

import Authenticate from "./Components/Authenticate/Authenticate.js";

import { Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Route path="/" exact component={props => <Redirect to="/home" />} />
        <Route path="/home" component={LandingPage} />
        <Route path="/home/login" component={Login} />
        <Route path="/home/signup" component={SignUp} />

        <Route
          path="/ServiceWorkers/dashboard"
          component={Authenticate(ServiceWorkers)}
        />
        <Route
          path="/ServiceWorkers/dashboard/edit"
          component={Authenticate(EditAccountModal)}
        />

        <Route
          path="/users/dashboard/edit"
          component={Authenticate(EditAccountModalUsers)}
        />

        <Route path="/Users/dashboard" component={Authenticate(Users)} />

        <Route path="/worker/account/:id" component={Authenticate(SWProfile)} />
      </div>
    );
  }
}

export default App;
