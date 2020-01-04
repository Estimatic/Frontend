import React from "react";
import styled from "styled-components";
import { Cover } from "../Cover";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { createCategory } from "../../../../actions/categories";

function AddProject(props) {
  const { side_bar_color, secondary_color } = props.ui.colors;

  return (
    <Cover
      onClick={e => {
        props.history.push("/app/projects");
      }}
    >
      <FormWrapper
        btnBackground={secondary_color}
        fontColor={side_bar_color}
        onClick={e => e.stopPropagation()}
      >
        <h4>Add Project</h4>
        <hr />
      </FormWrapper>
    </Cover>
  );
}

const mapStateToProps = state => {
  return {
    user: { ...state.auth.user },
    ui: { ...state.ui }
  };
};

export default connect(
  mapStateToProps,
  { createCategory }
)(withRouter(AddProject));

const FormWrapper = styled.div`
  margin: auto;
  margin-top: 104px;
  margin-bottom: 0px;
  width: 90%;
  max-width: 450px;
  padding: 16px;
  min-heigh: 600px;
  background: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.4);
  max-height: 80vh;
  overflow: auto;

  hr {
    opacity: 0.4;
  }

  button {
    margin: 16px;
    width: 160px;
    padding: 12px 0;
    border-radius: 32px;
    background: ${props =>
      props.btnBackground ||
      `linear-gradient(
      45deg,
      rgba(62, 132, 197, 1) 33%,
      rgba(60, 103, 190, 1) 61%,
      rgba(59, 73, 184, 1) 91%,
      rgba(59, 73, 184, 1) 93%,
      rgba(59, 73, 184, 1) 100%
    )`};
    color: ${props => props.fontColor || "white"};
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

const companyColor = "#0D076F";
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
