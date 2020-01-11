import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import withData from "../../../DataFetchingHOC";
import { withRouter } from "react-router-dom";

function BuildEstimate(props) {
  return <Wrapper>{props.match.params.id}</Wrapper>;
}

export default withData(
  connect(
    null,
    {}
  )(withRouter(BuildEstimate))
);

export const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  background-color: #ffffff;
  overflow-y: overlay;
  overflow-x: hidden;
`;
