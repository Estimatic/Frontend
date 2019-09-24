import React from "react";

import { SideBarWrapper } from "./SideNavStyles";

import { connect } from "react-redux";

function SideNav(props) {
  return (
    <SideBarWrapper sideNavWidth={props.sideNavWidth}>
      <div
        style={
          props.sideNavWidth === "0px"
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <h4>{props.user.full_name}</h4>
      </div>
    </SideBarWrapper>
  );
}

const mapStateToProps = state => {
  return {
    user: { ...state.auth.user }
  };
};

export default connect(
  mapStateToProps,
  {}
)(SideNav);
