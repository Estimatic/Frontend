import React from "react";

import { LeftPanel, RightPanel, LoginWrapper } from "./LoginStyles";

export default function Login(props) {
  return (
    <LoginWrapper>
      <LeftPanel>
        <h3
          onClick={e => {
            props.history.push("/");
          }}
        >
          estimatic
        </h3>
      </LeftPanel>
      <RightPanel />
    </LoginWrapper>
  );
}
