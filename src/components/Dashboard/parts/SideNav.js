import React, { useState } from "react";

import { SideBarWrapper } from "./SideNavStyles";

import { connect } from "react-redux";

function SideNav(props) {
  const [bgColor, seBgColor] = useState("0");

  return (
    <SideBarWrapper bgColor={bgColor} sideNavWidth={props.sideNavWidth}>
      <div
        style={
          props.sideNavWidth === "0px"
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <h4>{props.company.name}</h4>
      </div>
    </SideBarWrapper>
  );
}

const mapStateToProps = state => {
  return {
    user: { ...state.auth.user },
    company: { ...state.auth.company }
  };
};

export default connect(
  mapStateToProps,
  {}
)(SideNav);
