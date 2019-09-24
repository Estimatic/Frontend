import React from "react";
import { decodeAndRetrieveUserProfile } from "../../actions/auth";

import { connect } from "react-redux";

import SideNav from "./parts/SideNav";

import { DashboardWrapper, RightChannelWrapper } from "./DashboardStyles";

class Dashboard extends React.Component {
  componentDidMount = () => {
    this.props.decodeAndRetrieveUserProfile();
  };

  render() {
    return (
      <DashboardWrapper>
        <SideNav />
        <RightChannelWrapper>
          <h4>Welcome, {this.props.user.full_name}</h4>
          <button
            onClick={e => {
              localStorage.removeItem("token");
              this.props.history.push("/");
            }}
          >
            logout
          </button>
        </RightChannelWrapper>
      </DashboardWrapper>
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
