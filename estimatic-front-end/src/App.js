import React from "react";
import "./App.css";
import { withRouter } from "react-router";

import LandingPage from "./components/LandingPage/LandingPage";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";

import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={props => <LandingPage {...props} />} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default withRouter(App);
