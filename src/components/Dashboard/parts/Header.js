import React from "react";

import {
  HeaderWrapper,
  StyledMenuOpen,
  StyledMenuClose,
  LeftHeaderSection,
  RightHeaderSection,
  StyledNotification,
  StyledQuestion,
  StyledSettings
} from "./HeaderStyles";

import { connect } from "react-redux";

function Header(props) {
  return (
    <HeaderWrapper>
      <LeftHeaderSection>
        {props.curWidth === "350px" ? (
          <StyledMenuClose onClick={e => props.setSideNavWidth("0px")} />
        ) : (
          <StyledMenuOpen onClick={e => props.setSideNavWidth("350px")} />
        )}
        <h4>{props.curView}</h4>
      </LeftHeaderSection>

      <RightHeaderSection>
        <h5>{props.user.full_name}</h5>
        <StyledNotification />
        <StyledQuestion />
        <StyledSettings />
      </RightHeaderSection>
    </HeaderWrapper>
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
)(Header);
