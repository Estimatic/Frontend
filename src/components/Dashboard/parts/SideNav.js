import React from "react";
import { SideBarWrapper } from "./SideNavStyles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  StyledClose,
  StyledDashboard,
  StyledPeople,
  StyledBuild,
  StyledAssignment,
  StyledPermIdentity,
  StyledMessage
} from "./SideNavStyles";

function SideNav(props) {
  return (
    <SideBarWrapper sideNavWidth={props.sideNavWidth}>
      <StyledClose
        onClick={e => {
          props.setSideNavWidth("0px");
        }}
      />
      <div
        style={
          props.sideNavWidth === "0px"
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <h4>{props.company.name}</h4>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            style={{
              width: "75px",
              height: "75px",
              borderRadius: "50%",
              margin: "auto",
              marginBottom: "16px"
            }}
            alt="user avatar"
            src={
              props.user.photoUrl ||
              "https://www.legaseeds.com/assets/user_placeholder.svg"
            }
          />
        </div>
      </div>
      {/* ***** */}
      {/* ***** */}
      {/* ***** */}
      {/* nav links */}
      {/* ***** */}
      {/* ***** */}
      {/* ***** */}
      <ul
        style={
          props.sideNavWidth === "0px"
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <li
          style={
            props.ui.curTab === "Dashboard"
              ? { background: "rgba(255,255,255,0.1)" }
              : {}
          }
          onClick={e => {
            props.history.push("/app");
          }}
        >
          <StyledDashboard />
          Dashboard
        </li>
        <li
          style={
            props.ui.curTab === "Employees"
              ? { background: "rgba(255,255,255,0.1)" }
              : {}
          }
          onClick={e => {
            props.history.push("/app/employees");
          }}
        >
          <StyledPeople />
          Employees
        </li>
        <li
          style={
            props.ui.curTab === "Projects"
              ? { background: "rgba(255,255,255,0.1)" }
              : {}
          }
          onClick={e => {
            props.history.push("/app/projects");
          }}
        >
          <StyledBuild />
          Projects
        </li>
        <li
          style={
            props.ui.curTab === "Customers"
              ? { background: "rgba(255,255,255,0.1)" }
              : {}
          }
          onClick={e => {
            props.history.push("/app/customers");
          }}
        >
          <StyledPermIdentity />
          Customers
        </li>
        <li
          style={
            props.ui.curTab === "Materials"
              ? { background: "rgba(255,255,255,0.1)" }
              : {}
          }
          onClick={e => {
            props.history.push("/app/materials");
          }}
        >
          <StyledAssignment />
          Materials
        </li>
        <li
          style={
            props.ui.curTab === "Messages"
              ? { background: "rgba(255,255,255,0.1)" }
              : {}
          }
          onClick={e => {
            props.history.push("/app/messages");
          }}
        >
          <StyledMessage />
          Messages
        </li>
      </ul>
    </SideBarWrapper>
  );
}

const mapStateToProps = state => {
  return {
    user: { ...state.auth.user },
    company: { ...state.auth.company },
    ui: { ...state.ui }
  };
};

export default connect(
  mapStateToProps,
  {}
)(withRouter(SideNav));