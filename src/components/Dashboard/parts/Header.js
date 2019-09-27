import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { changeCurTab } from "../../../actions/ui";

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

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { connect } from "react-redux";

function Header(props) {
  // sets dash label for current view
  const [curView, setCurView] = useState("");
  useEffect(() => {
    let curPath = props.history.location.pathname;
    curPath = curPath.split("/");

    let dashLabel = "";

    if (curPath.length === 2) {
      dashLabel = "Dashboard";
    } else {
      dashLabel = curPath[2];
      dashLabel = dashLabel
        .split("")
        .map((letter, i) => {
          return i === 0 ? letter.toUpperCase() : letter;
        })
        .join("");
    }
    setCurView(dashLabel);
    props.changeCurTab(dashLabel);
    // disabling passing "props" to dep array
    // dont see need, as only thing we depend on really is path name
    // just noting this incase this becomes and error at some point!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.history.location.pathname]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderWrapper>
      <LeftHeaderSection>
        {props.curWidth === "350px" ? (
          <StyledMenuClose onClick={e => props.setSideNavWidth("0px")} />
        ) : (
          <StyledMenuOpen onClick={e => props.setSideNavWidth("350px")} />
        )}
        <h4>{curView}</h4>
      </LeftHeaderSection>

      <RightHeaderSection>
        <h5>{props.company.name}</h5>
        <StyledNotification />
        <StyledQuestion />
        <StyledSettings
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          style={{ marginTop: "40px" }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={e => {
              handleClose();
              props.history.push("/app/accountsettings");
            }}
          >
            Account Settings
          </MenuItem>
          <MenuItem
            onClick={e => {
              handleClose();
              props.history.push("/app/displaysettings");
            }}
          >
            Display Settings
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              localStorage.removeItem("token");
              props.history.push("/");
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </RightHeaderSection>
    </HeaderWrapper>
  );
}

const mapStateToProps = state => {
  return {
    company: { ...state.auth.company },
    user: { ...state.auth.user }
  };
};

export default connect(
  mapStateToProps,
  { changeCurTab }
)(withRouter(Header));
