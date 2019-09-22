import React from "react";
import "./App.css";
import { withRouter } from "react-router";

import LandingPage from "./components/LandingPage/LandingPage";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={props => <LandingPage {...props} />} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/app" render={props => <Dashboard {...props} />} />
      </div>
    );
  }
}

export default withRouter(App);
