import React from "react";
import { decodeAndRetrieveUserProfile } from "../../actions/auth";

import { connect } from "react-redux";

import Header from "./parts/HeaderAndHeaderContent/Header";
import SideNav from "./parts/SideNav/SideNav";
import EmployeesTab from "./parts/EmployeesTab/EmployeesTab";
import MainDashTab from "./parts/MainDashTab/MainDashTab";
import ProjectsTab from "./parts/ProjectsTab/ProjectsTab";
import CustomersTab from "./parts/CustomersTab/CustomersTab";
import MaterialsTab from "./parts/MaterialsTab/MaterialsTab";
import MessagesTab from "./parts/MessagesTab/MessagesTab";
import DisplaySettings from "./parts/HeaderAndHeaderContent/DisplaySettings";
import AccountSettings from "./parts/HeaderAndHeaderContent/AccountSettings";
import HelpPage from "./parts/HeaderAndHeaderContent/HelpPage";
import CreateCustomer from "./parts/CustomersTab/CreateCustomer";
import AddCategory from "./parts/MaterialsTab/AddCategory";
import AddMaterial from "./parts/MaterialsTab/AddMaterial";

import CreateEmployee from "./parts/EmployeesTab/CreateEmployee";

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
      <DashboardWrapper style={{ position: "relative" }}>
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
          <Route path="/app/employees/invite" component={CreateEmployee} />

          <Route exact path="/app" component={MainDashTab} />
          <Route exact path="/app/projects" component={ProjectsTab} />
          <Route path="/app/customers" component={CustomersTab} />
          <Route path="/app/customers/create" component={CreateCustomer} />

          <Route path="/app/materials" component={MaterialsTab} />
          <Route
            exact
            path="/app/materials/category/create"
            component={AddCategory}
          />

          <Route
            exact
            path="/app/materials/add_material/:id"
            component={AddMaterial}
          />

          <Route exact path="/app/messages" component={MessagesTab} />
          <Route exact path="/app/help" component={HelpPage} />
          <Route exact path="/app/help" component={HelpPage} />

          <Route
            exact
            path="/app/displaysettings"
            component={DisplaySettings}
          />
          <Route
            exact
            path="/app/accountsettings"
            component={AccountSettings}
          />
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
