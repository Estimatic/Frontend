import React from "react";

import {
  HeaderWrapper,
  StyledMenuOpen,
  StyledMenuClose,
  LeftHeaderSection
} from "./HeaderStyles";

export default function Header(props) {
  return (
    <HeaderWrapper>
      <LeftHeaderSection>
        {props.curWidth === "300px" ? (
          <StyledMenuClose onClick={e => props.setSideNavWidth("0px")} />
        ) : (
          <StyledMenuOpen onClick={e => props.setSideNavWidth("300px")} />
        )}
        <h4>{props.curView}</h4>
      </LeftHeaderSection>
    </HeaderWrapper>
  );
}

// <StyledMenuOpen
//   onClick={e => {
//     if (props.curWidth === "300px") {
//       props.setSideNavWidth("0px");
//     } else {
//       props.setSideNavWidth("300px");
//     }
//   }}
// />
