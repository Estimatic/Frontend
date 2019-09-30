import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  SideBarWrapper,
  StyledClose,
  StyledDashboard,
  StyledPeople,
  StyledBuild,
  StyledAssignment,
  StyledPermIdentity,
  StyledMessage,
  ImgNameWrapper
} from "./SideNavStyles";

function SideNav(props) {
  const { main_color, side_bar_color } = props.ui.colors;

  return (
    <SideBarWrapper
      bgColor={main_color}
      fontColor={side_bar_color}
      sideNavWidth={props.sideNavWidth}
    >
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
        <ImgNameWrapper>
          <img
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              margin: "auto",
              marginBottom: "16px",
              marginTop: "36px",
              background: side_bar_color
            }}
            alt="user avatar"
            src={
              props.user.photoUrl ||
              "https://www.legaseeds.com/assets/user_placeholder.svg"
            }
          />
          <h5>{props.user.full_name}</h5>
        </ImgNameWrapper>
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
