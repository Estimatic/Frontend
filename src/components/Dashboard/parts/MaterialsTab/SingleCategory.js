import React from "react";
import styled from "styled-components";
import SingleMaterial from "./SingleMaterial";
import { connect } from "react-redux";

function SingleCategory(props) {
  const { secondary_color } = props.ui.colors;
  return (
    <Wrapper secondary_color={secondary_color}>
      <h4>
        {props.category.name} <span>- {props.category.unit}</span>{" "}
      </h4>
      {props.category.materials.map(mat => {
        return <SingleMaterial material={mat} key={mat._id} />;
      })}
    </Wrapper>
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
)(SingleCategory);

const Wrapper = styled.div`
  background: #fafafa;
  color: rgba(0, 0, 0, 0.5);
  font-style: italic;
  padding: 16px 0;
  margin-bottom: 16px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

  h4 {
    font-style: normal;
    font-size: 24px;
    margin-bottom: 8px;
    margin-top: 0;
    text-align: center;
    color: ${props => props.secondary_color || "#7A7A7A"};
    span {
      text-align: center;
      font-size: 14px;
      margin-bottom: 32px;
      margin-top: 0;
      font-weight: 200;
      color: #7a7a7a;
    }
  }
`;
