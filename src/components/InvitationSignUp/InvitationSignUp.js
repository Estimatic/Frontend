import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getInvitation } from "../../actions/employees";
import { createNewAccount } from "../../actions/auth";

import { withRouter } from "react-router-dom";

import styled from "styled-components";
import {
  LeftPanel,
  RightPanel,
  CompleteWrapper,
  CompleteFormWrapper,
  ElseSignUp,
  breakPointOne,
  breakPointTwo
} from "./InvSignUpStyles";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Lock from "@material-ui/icons/Lock";

import Swal from "sweetalert2";

import { ReactComponent as HousePic } from "../../imgs/undraw_revenue_3osh.svg";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  }
}));

function InvitationSignUp(props) {
  const { id } = props.match.params;
  const { getInvitation } = props;
  const { invitation } = props.employees;

  useEffect(() => {
    getInvitation(id).then(res => {
      if (!res) {
        Swal.fire(
          "Oops!",
          "Invalid invitation link! Contact your employer to recieve a new invitation.",
          "warning"
        );
        props.history.push("/");
      }
    });
  }, [id, getInvitation, props.history]);

  const [password, setPassword] = useState("");
  const [rtPassword, setRtPassword] = useState("");

  const classes = useStyles();

  return (
    <CompleteWrapper>
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
        <CompleteFormWrapper>
          <h4>Hey {invitation["full_name"]}!</h4>
          <hr />
          <form
            onSubmit={e => {
              e.preventDefault();
              if (password !== rtPassword) {
                Swal.fire(
                  "Oops!",
                  "Your passwords dont seem to match. Try again!",
                  "warning"
                );
                return;
              }
              const newUser = {
                password,
                email: invitation.email,
                full_name: invitation["full_name"],
                company_id: invitation["company_id"]
              };
              props.createNewAccount(newUser, invitation._id).then(res => {
                if (res) {
                  props.history.push("/login");
                  Swal.fire(
                    "Success!",
                    "Thanks for choosing Estimatic!",
                    "success"
                  );
                } else {
                  props.history.push("/");
                  Swal.fire(
                    "Oops!",
                    "Your it seems there was an issue setting up your account! This is likely due to attempting to sign up with an email thats already in use. Please choose a different email and have your employer send you a new invitation. Were sorry for the inconvenience!",
                    "warning"
                  );
                }
              });
            }}
          >
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
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <Lock />
                </Grid>
                <Grid item style={{ width: "100%", maxWidth: "300px" }}>
                  <TextField
                    type="password"
                    fullWidth={true}
                    value={rtPassword}
                    onChange={e => {
                      setRtPassword(e.target.value);
                    }}
                    label="re-type password"
                  />
                </Grid>
              </Grid>
            </div>
            <button type="submit">Complete</button>
          </form>
        </CompleteFormWrapper>
        <ElseSignUp>
          <p>
            {invitation["sender_name"]} has asked you to join them on estimatic
            as an employee. Not what you meant to do?{" "}
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
    </CompleteWrapper>
  );
}

const mapStateToProps = state => {
  return {
    employees: state.employees
  };
};

export default connect(
  mapStateToProps,
  { getInvitation, createNewAccount }
)(withRouter(InvitationSignUp));

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
