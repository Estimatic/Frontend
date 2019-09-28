import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { Cover } from "./Cover";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";

import { updateCompanyColors } from "../../../actions/ui";

import Swal from "sweetalert2";

function DisplaySettings(props) {
  const { main_color, side_bar_color, secondary_color } = props.ui.colors;

  const [mainColor, setMainColor] = useState("#3B49B8");
  const [secondayColor, setSecondayColor] = useState("#3B49B8");
  const [sideBarFont, setSideBarFont] = useState("#FFFFFF");

  useEffect(() => {
    if (main_color) {
      setMainColor(main_color);
    }
    if (side_bar_color) {
      setSideBarFont(side_bar_color);
    }
    if (secondary_color) {
      setSecondayColor(secondary_color);
    }
  }, [main_color, side_bar_color, secondary_color]);

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
          <ColorDisplay style={{ background: mainColor, marginTop: "16px" }}>
            <h4 style={{ color: sideBarFont }}>Main Color</h4>
          </ColorDisplay>
          <p>
            "Main Color" is the background color of your side bar, as well as
            some other larger components of the applciation.
          </p>
          <ChromePicker
            color={mainColor}
            onChangeComplete={color => {
              setMainColor(color.hex);
            }}
          />
          <ColorDisplay style={{ background: "rgba(0,0,0,0.1)" }}>
            <h4 style={{ color: secondayColor }}>Seconday Color</h4>
          </ColorDisplay>
          <p>
            "Secondary Color" is the color used for highlights throughout the
            application.
          </p>
          <ChromePicker
            color={secondayColor}
            onChangeComplete={color => {
              setSecondayColor(color.hex);
            }}
          />
          <ColorDisplay style={{ background: mainColor }}>
            <h4 style={{ color: sideBarFont }}>Side Bar Font</h4>
          </ColorDisplay>
          <p>
            "Side Bar Font" is the color of the navigation text on your side
            bar. We reccomend sticking with something close to white or black.
          </p>
          <ChromePicker
            color={sideBarFont}
            onChangeComplete={color => {
              setSideBarFont(color.hex);
            }}
          />
          <ButtonWrapper>
            <Button
              color="primary"
              variant="contained"
              style={{ backgroundColor: main_color || null }}
              size="medium"
              onClick={() => {
                const newDisplaySettings = {
                  main_color: mainColor,
                  secondary_color: secondayColor,
                  side_bar_color: sideBarFont
                };
                props
                  .updateCompanyColors(newDisplaySettings, props.companyId)
                  .then(res => {
                    if (res) {
                      Swal.fire(
                        "Success!",
                        `We've updated your display settings!`,
                        "success"
                      );
                    } else {
                      Swal.fire(
                        "Oops!",
                        "There was an issue editing your display settings.",
                        "warning"
                      );
                    }
                    props.history.push("/app");
                  });
              }}
            >
              Submit Changes
            </Button>

            <Button
              size="medium"
              style={{ color: main_color || null }}
              onClick={() => {
                const newDisplaySettings = {
                  main_color: null,
                  secondary_color: null,
                  side_bar_color: null
                };
                props
                  .updateCompanyColors(newDisplaySettings, props.companyId)
                  .then(res => {
                    if (res) {
                      Swal.fire(
                        "Success!",
                        `We've updated your display settings!`,
                        "success"
                      );
                    } else {
                      Swal.fire(
                        "Oops!",
                        "There was an issue editing your display settings.",
                        "warning"
                      );
                    }
                    props.history.push("/app");
                  });
              }}
            >
              Restore Defaults
            </Button>
          </ButtonWrapper>
        </PickersWrapper>
      </DisplayWrapper>
    </Cover>
  );
}

const mapStateToProps = state => {
  return {
    companyId: state.auth.company._id,
    ui: { ...state.ui }
  };
};

export default connect(
  mapStateToProps,
  { updateCompanyColors }
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

  h4 {
    font-size: 32px;
    margin: 0 16px;
    font-weight: 400;
  }

  p {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
    margin: 32px 8px;
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
  margin: auto;
  margin-top: 64px;

  h4 {
    font-size: 36px;
    font-weight: 600;
    color: white;
  }
`;

const ButtonWrapper = styled.div`
  width: 92%;
  margin: 64px auto;
  display: flex;
  justify-content: space-around;
`;
