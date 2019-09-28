import React from "react";
import "./App.css";
import { withRouter } from "react-router";

import LandingPage from "./components/LandingPage/LandingPage";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import InvitationSignUp from "./components/InvitationSignUp/InvitationSignUp";
import Redirected from "./components/Misc/Redirected";

import authenticate from "./components/Misc/authenticate";

import { Route } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    let path = this.props.history.location.pathname;
    let token = localStorage.getItem("token");

    if (path === "/" && token) {
      this.props.history.push("/app");
    }
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={props => <LandingPage {...props} />} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/app" component={authenticate(Dashboard)} />
        <Route path="/redirected" component={Redirected} />
        <Route path="/joincompany/:id" component={InvitationSignUp} />
      </div>
    );
  }
}

export default withRouter(App);
