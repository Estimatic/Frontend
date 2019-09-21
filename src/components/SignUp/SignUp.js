import React, { useState } from "react";
import styled from "styled-components";
import {
  LeftPanel,
  RightPanel,
  LoginWrapper,
  ElseSignUp
} from "./SignUpStyles";
import { ReactComponent as HousePic } from "../../imgs/undraw_revenue_3osh.svg";
import { breakPointOne, breakPointTwo } from "./SignUpStyles";
import BasicInfoForm from "./parts/BasicInfoForm";

export default function SignUp(props) {
  const [curStep, setCurStep] = useState(1);

  return (
    <LoginWrapper>
      <LeftPanel>
        <h3
          style={{ zIndex: "10" }}
          onClick={() => {
            props.history.push("/");
          }}
        >
          estimatic
        </h3>
        <StyledHousePic />
      </LeftPanel>
      <RightPanel>
        {/* add modals here */}
        {curStep === 1 ? <BasicInfoForm setCurStep={setCurStep} /> : null}
        <ElseSignUp>
          <p>
            already have an account?{" "}
            <span
              onClick={() => {
                props.history.push("/login");
              }}
            >
              log in!
            </span>
          </p>
        </ElseSignUp>
      </RightPanel>
    </LoginWrapper>
  );
}

const StyledHousePic = styled(HousePic)`
  width: 100%;
  max-height: 300px;
  margin: 32px auto;
  margin-bottom: 16px;
  @media (max-width: ${breakPointTwo}) {
    display: none;
  }
  @media (max-width: ${breakPointOne}) {
    margin-bottom: 0;
  }
`;
