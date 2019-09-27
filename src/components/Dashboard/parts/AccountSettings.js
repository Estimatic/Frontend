import React from "react";
import styled from "styled-components";
import { Cover } from "./Cover";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// import Swal from "sweetalert2";

function AccountSettings(props) {
  return (
    <Cover
      onClick={e => {
        props.history.push("/app");
      }}
    >
      <DisplayWrapper onClick={e => e.stopPropagation()}>
        <h4>Account Settings</h4>
        <hr />
      </DisplayWrapper>
    </Cover>
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
)(withRouter(AccountSettings));

const DisplayWrapper = styled.div`
  margin: auto;
  margin-top: 136px;
  margin-bottom: 0px;
  width: 90%;
  max-width: 450px;
  padding: 16px;
  min-heigh: 600px;
  background: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.4);
  max-height: 80vh;
  overflow: scroll;

  hr {
    opacity: 0.4;
  }

  button {
    margin: 16px;
    width: 160px;
    padding: 12px 0;
    border-radius: 32px;
    background: linear-gradient(
      45deg,
      rgba(62, 132, 197, 1) 33%,
      rgba(60, 103, 190, 1) 61%,
      rgba(59, 73, 184, 1) 91%,
      rgba(59, 73, 184, 1) 93%,
      rgba(59, 73, 184, 1) 100%
    );
    color: white;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 800;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  }

  h4 {
    font-size: 32px;
    margin: 0 16px;
    font-weight: 400;
  }
`;

const companyColor = "#3B49B8";
export const Directions = styled.div`
  margin: auto;
  color: rgba(0, 0, 0, 0.4);
  width: 90%;
  max-width: 450px;
  padding: 16px 16px 16px 0;
  span {
    text-decoration: underline;
    color: ${companyColor};
    cursor: pointer;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;
