import React from "react";

import { SideBarWrapper } from "./SideNavStyles";

import { connect } from "react-redux";

function SideNav(props) {
  return (
    <SideBarWrapper>
      <h4>{props.user.full_name}</h4>
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
