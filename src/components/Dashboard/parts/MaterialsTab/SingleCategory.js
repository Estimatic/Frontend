import React, { useState } from "react";
import styled from "styled-components";
import SingleMaterial from "./SingleMaterial";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ArrowRight from "@material-ui/icons/ArrowRight";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";

function SingleCategory(props) {
  const { secondary_color } = props.ui.colors;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Wrapper secondary_color={secondary_color}>
      <TopWrapper>
        <ArrowWrapper>
          {open ? (
            <StyledArrowDown onClick={handleOpen} />
          ) : (
            <StyledArrowRight onClick={handleOpen} />
          )}
        </ArrowWrapper>
        <h4>
          {props.category.name} <span>- {props.category.unit}</span>{" "}
        </h4>
        <Button
          style={{
            color: secondary_color || "#3B49B8"
          }}
          size="small"
          onClick={() => {
            props.history.push(
              `/app/materials/add_material/${props.category._id}`
            );
          }}
        >
          Add Material
        </Button>
      </TopWrapper>
      <div style={!open ? { display: "none" } : null}>
        {props.category.materials.map(mat => {
          return <SingleMaterial material={mat} key={mat._id} />;
        })}
      </div>
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
)(withRouter(SingleCategory));

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
    margin: 0;
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

const ArrowWrapper = styled.div``;

const StyledArrowRight = styled(ArrowRight)`
  transform: scale(1.2);
  cursor: pointer;
`;

const StyledArrowDown = styled(ArrowDropDown)`
  transform: scale(1.2);
  cursor: pointer;
`;
const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;
