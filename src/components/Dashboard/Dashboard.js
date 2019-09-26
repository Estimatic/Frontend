import React from "react";
import { decodeAndRetrieveUserProfile } from "../../actions/auth";

import { connect } from "react-redux";

import Header from "./parts/Header";
import SideNav from "./parts/SideNav";
import EmployeesTab from "./parts/EmployeesTab";
import MainDashTab from "./parts/MainDashTab";
import ProjectsTab from "./parts/ProjectsTab";
import CustomersTab from "./parts/CustomersTab";
import MaterialsTab from "./parts/MaterialsTab";
import MessagesTab from "./parts/MessagesTab";

import { Route } from "react-router-dom";

import { DashboardWrapper, RightChannelWrapper } from "./DashboardStyles";

class Dashboard extends React.Component {
  state = {
    sideNavWidth: "350px"
  };

  componentDidMount = () => {
    // should fetch makes sure that we only trigger a request for user info when the dash is opened
    // as opposed to on any rerender.
    if (this.props.shouldFetch) {
      this.props
        .decodeAndRetrieveUserProfile()
        .then(() => {
          console.log("--loaded");
        })
        .catch(err => {
          this.props.history.push("/login");
          alert(
            "There was an error retrieving your profile. Plase give us a few minutes and try logging back in!"
          );
          localStorage.removeItem("token");
        });
    }
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
          {/* <h4>Welcome, {this.props.user.full_name}</h4>
          <button
            onClick={e => {
              localStorage.removeItem("token");
              this.props.history.push("/");
            }}
          >
            logout
          </button> */}
          <Route path="/app/employees" component={EmployeesTab} />
          <Route exact path="/app" component={MainDashTab} />
          <Route exact path="/app/projects" component={ProjectsTab} />
          <Route exact path="/app/customers" component={CustomersTab} />
          <Route exact path="/app/materials" component={MaterialsTab} />
          <Route exact path="/app/messages" component={MessagesTab} />
        </RightChannelWrapper>
      </DashboardWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: { ...state.auth.user },
    shouldFetch: state.auth.shouldFetch
  };
};

export default connect(
  mapStateToProps,
  { decodeAndRetrieveUserProfile }
)(Dashboard);
