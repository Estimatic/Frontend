import React, { useState } from "react";
import styled from "styled-components";
import { Cover } from "./Cover";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Swal from "sweetalert2";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Email from "@material-ui/icons/Email";
import Person from "@material-ui/icons/Person";

import { inviteNewEmployee } from "../../../actions/employees";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  }
}));

function CreateEmployee(props) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const classes = useStyles();

  return (
    <Cover
      onClick={e => {
        props.history.push("/app/employees");
      }}
    >
      <LoginFormMain onClick={e => e.stopPropagation()}>
        <h4>Add Employee</h4>
        <hr />
        <form
          onSubmit={e => {
            e.preventDefault();

            props
              .inviteNewEmployee(
                fullName,
                email,
                props.user["full_name"],
                props.user["company_id"]
              )
              .then(res => {
                if (res) {
                  Swal.fire(
                    "Success!",
                    `We've invited ${fullName} to join your company. They'll show up on your dashboard whenever they accept your invite.`,
                    "success"
                  );
                } else {
                  Swal.fire(
                    "Oops!",
                    "There was an issue inviting this employee. This person may already have and account with the email provided. Please double check the email and retry.",
                    "warning"
                  );
                }
                props.history.push("/app/employees");
              })
              .catch(err => {
                Swal.fire(
                  "Oops!",
                  "There was an issue inviting this employee. This is likely an issue with our server. Please try again in a few minutes.",
                  "warning"
                );
              });
          }}
        >
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item>
                <Person />
              </Grid>
              <Grid item style={{ width: "100%", maxWidth: "300px" }}>
                <TextField
                  type="text"
                  fullWidth={true}
                  value={fullName}
                  onChange={e => {
                    setFullName(e.target.value);
                  }}
                  label="full name"
                />
              </Grid>
            </Grid>
          </div>
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
          <Directions>
            <p>
              This employee will recieve an email invitation to join your
              company on estimatic.
            </p>
          </Directions>
          <button type="submit">Send Request</button>
        </form>
      </LoginFormMain>
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
  { inviteNewEmployee }
)(withRouter(CreateEmployee));

const LoginFormMain = styled.div`
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
