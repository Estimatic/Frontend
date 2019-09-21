import React, { useState } from "react";
import styled from "styled-components";
import {
  LeftPanel,
  RightPanel,
  LoginWrapper,
  LoginFormMain,
  ElseSignUp
} from "./LoginStyles";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";

import { ReactComponent as HousePic } from "../../imgs/undraw_revenue_3osh.svg";

import { breakPointOne, breakPointTwo } from "./LoginStyles";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  }
}));

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

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
        <LoginFormMain>
          <h4>Login</h4>
          <hr />
          <form
            onSubmit={e => {
              e.preventDefault();
              console.log(email, password);
              setEmail("");
              setPassword("");
            }}
          >
            <div className={classes.margin}>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                  <Email />
                </Grid>
                <Grid item style={{ width: "100%", maxWidth: "300px" }}>
                  <TextField
                    type="email"
                    fullWidth={true}
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                    label="e-mail"
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <Lock />
                </Grid>
                <Grid item style={{ width: "100%", maxWidth: "300px" }}>
                  <TextField
                    type="password"
                    fullWidth={true}
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                    }}
                    label="password"
                  />
                </Grid>
              </Grid>
            </div>
            <button type="submit">Log In</button>
          </form>
        </LoginFormMain>
        <ElseSignUp>
          <p>
            no account?{" "}
            <span
              onClick={() => {
                props.history.push("/signup");
              }}
            >
              sign up!
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
