import React from "react";
import { decodeAndRetrieveUserProfile } from "../../actions/auth";

import { connect } from "react-redux";

class Dashboard extends React.Component {
  componentDidMount = () => {
    this.props.decodeAndRetrieveUserProfile();
  };

  render() {
    return (
      <div>
        <p>Welcome {this.props.user.full_name}</p>
        <button
          onClick={e => {
            localStorage.removeItem("token");
            this.props.history.push("/");
          }}
        >
          logout
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: { ...state.auth.user }
  };
};

export default connect(
  mapStateToProps,
  { decodeAndRetrieveUserProfile }
)(Dashboard);
