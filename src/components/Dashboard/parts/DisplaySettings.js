import React, { useState } from "react";
import styled from "styled-components";
import { Cover } from "./Cover";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";

// import Swal from "sweetalert2";

function DisplaySettings(props) {
  const [mainColor, setMainColor] = useState("#3B49B8");
  const [secondayColor, setSecondayColor] = useState("#3B49B8");
  const [sideBarFont, setSideBarFont] = useState("white");

  return (
    <Cover
      onClick={e => {
        props.history.push("/app");
      }}
    >
      <DisplayWrapper onClick={e => e.stopPropagation()}>
        <h4>Display Settings</h4>
        <hr />
        <PickersWrapper>
          <ColorDisplay style={{ background: mainColor }}>
            <h4 style={{ color: sideBarFont }}>Main Color</h4>
          </ColorDisplay>
          <ChromePicker
            color={mainColor}
            onChangeComplete={color => {
              setMainColor(color.hex);
            }}
          />
          <ColorDisplay style={{ background: "rgba(0,0,0,0.1)" }}>
            <h4 style={{ color: secondayColor }}>Seconday Color</h4>
          </ColorDisplay>
          <ChromePicker
            color={secondayColor}
            onChangeComplete={color => {
              setSecondayColor(color.hex);
            }}
          />
          <ColorDisplay style={{ background: mainColor }}>
            <h4 style={{ color: sideBarFont }}>Side Bar Font</h4>
          </ColorDisplay>
          <ChromePicker
            color={sideBarFont}
            onChangeComplete={color => {
              setSideBarFont(color.hex);
            }}
          />
        </PickersWrapper>
      </DisplayWrapper>
      <Button
        color="primary"
        variant="contained"
        size="medium"
        onClick={() => {
          const newDisplaySettings = {
            main_color: mainColor,
            secondary_color: secondayColor,
            side_bar_color: sideBarFont
          };
          console.log(newDisplaySettings);
        }}
      >
        Add Employee
      </Button>
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
)(withRouter(DisplaySettings));

const DisplayWrapper = styled.div`
  margin: auto;
  margin-top: 56px;
  margin-bottom: 0px;
  max-height: 400px;
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
    opacity: 0.9;
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

const PickersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ColorDisplay = styled.div`
  width: 92%;
  padding: 16px;
  margin: 32px auto;

  h4 {
    font-size: 36px;
    font-weight: 600;
    color: white;
  }
`;
