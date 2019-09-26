import React from "react";
import { decodeAndRetrieveUserProfile } from "../../actions/auth";

import { connect } from "react-redux";

import Header from "./parts/Header";
import SideNav from "./parts/SideNav";

import { DashboardWrapper, RightChannelWrapper } from "./DashboardStyles";

class Dashboard extends React.Component {
  state = {
    sideNavWidth: "350px"
  };

  componentDidMount = () => {
    this.props.decodeAndRetrieveUserProfile();
  };

  setSideNavWidth = width => {
    this.setState({
      sideNavWidth: width
    });
  };

  render() {
    return (
      <DashboardWrapper>
        <SideNav
          setSideNavWidth={this.setSideNavWidth}
          sideNavWidth={this.state.sideNavWidth}
        />
        <RightChannelWrapper>
          <Header
            setSideNavWidth={this.setSideNavWidth}
            curWidth={this.state.sideNavWidth}
          />
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
