import React, { useState } from "react";
import { connect } from "react-redux";

import { handleUserInfoSubmission } from "../../../actions/auth";

import { LoginFormMain } from "../SignUpStyles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import Person from "@material-ui/icons/Person";
import Build from "@material-ui/icons/Build";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  }
}));

function BasicInfoForm(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPass, setVerifyPass] = useState("");
  const [companyName, setCompanyName] = useState("");

  const classes = useStyles();
  return (
    <LoginFormMain>
      <h4>Sign Up</h4>
      <hr />
      <form
        onSubmit={e => {
          e.preventDefault();
          const newUserObject = {
            full_name: fullName,
            email,
            password,
            companyName
          };

          if (password === verifyPass) {
            setEmail("");
            setPassword("");
            setFullName("");
            setVerifyPass("");
            setCompanyName("");
            props.handleUserInfoSubmission(newUserObject);
            setTimeout(() => {
              props.setCurStep(2);
            }, 500);
          }
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
                value={verifyPass}
                onChange={e => {
                  setVerifyPass(e.target.value);
                }}
                label="verify password"
              />
            </Grid>
          </Grid>
        </div>

        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Build />
            </Grid>
            <Grid item style={{ width: "100%", maxWidth: "300px" }}>
              <TextField
                type="text"
                fullWidth={true}
                value={companyName}
                onChange={e => {
                  setCompanyName(e.target.value);
                }}
                label="company name"
              />
            </Grid>
          </Grid>
        </div>
        <button type="submit">Sign up</button>
      </form>
    </LoginFormMain>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { handleUserInfoSubmission }
)(BasicInfoForm);
