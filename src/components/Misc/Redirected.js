import React from "react";
import { withRouter } from "react-router-dom";

function Redirected(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>
        Looks like you're attempting to access your dashboard without logging
        in!
      </h3>
      <p>
        Please{" "}
        <span
          onClick={e => props.history.push("/login")}
          style={{
            textDecoration: "underline",
            color: "blue",
            cursor: "pointer"
          }}
        >
          log in
        </span>{" "}
        to access this page!
      </p>
    </div>
  );
}

export default withRouter(Redirected);
