import React from "react";
import styled from "styled-components";
import { Cover } from "./Cover";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// import Swal from "sweetalert2";

function HelpPage(props) {
  const { main_color, side_bar_color, secondary_color } = props.ui.colors;

  return (
    <Cover
      onClick={e => {
        props.history.push("/app");
      }}
    >
      <DisplayWrapper
        labelColor={secondary_color}
        onClick={e => e.stopPropagation()}
      >
        <h4>help</h4>
        <hr />
      </DisplayWrapper>
    </Cover>
  );
}

const mapStateToProps = state => {
  return {
    ui: { ...state.ui }
  };
};

export default connect(
  mapStateToProps,
  {}
)(withRouter(HelpPage));

const DisplayWrapper = styled.div`
  margin: auto;
  margin-top: 64px;
  margin-bottom: 0px;
  width: 90%;
  max-width: 450px;
  margin-bottom: 32px;
  padding: 16px;
  background: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.4);
  max-height: 80vh;
  overflow: scroll;

  hr {
    opacity: 0.4;
    margin: 16px 0;
  }

  button {
    margin-left: 16px;
    margin-top: 32px;
    width: 125px;
  }

  h4 {
    font-size: 32px;
    margin: 0 16px;
    font-weight: 400;
  }
  h5 {
    color: ${props => props.labelColor || "rgba(0, 0, 0, 0.4)"};
    font-size: 24px;
    margin: 0;
    margin-bottom: 8px;
    margin-left: 16px
    font-weight: 600;
  }
`;
