import React from "react";
import { Redirect } from "react-router-dom";

export default function authenticate(Component) {
  return class Authenticate extends React.Component {
    render() {
      const id_token = localStorage.getItem("token");
      return (
        <>
          {id_token ? (
            <Component {...this.props} />
          ) : (
            <Redirect to="/redirected" />
          )}
        </>
      );
    }
  };
}
