import React, { useEffect } from "react";

import { connect } from "react-redux";

function Dashboard(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return <div>Welcome {props.user.full_name || "User"}</div>;
}

const mapStateToProps = state => {
  return {
    user: { ...state.auth.user }
  };
};

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
