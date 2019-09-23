import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { LoginFormMain } from "../SignUpStyles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Person from "@material-ui/icons/Person";

import { makeStyles } from "@material-ui/core/styles";

import { sendVerificationEmail } from "../../../actions/auth";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  }
}));

function VerifyEmailForm(props) {
  useEffect(() => {
    setCorrectVerificationCode(`${props.emailConfirmationNumber}`);
    // for staging only
    setVerificationCode(`${props.emailConfirmationNumber}`);

    props.sendVerificationEmail({
      emailVerificationNumber: props.emailConfirmationNumber,
      emailTo: props.signingUpUser.email
    });
  }, [props]);

  const [verificationCode, setVerificationCode] = useState("");
  const [correctVerificationCode, setCorrectVerificationCode] = useState("");

  const classes = useStyles();
  return (
    <LoginFormMain>
      <h4>Verify Email</h4>
      <hr />
      <p>
        We've sent a verification code to the email that you've provided. Please
        enter it in the field below.
      </p>
      <form
        onSubmit={e => {
          e.preventDefault();

          if (verificationCode === correctVerificationCode) {
            setVerificationCode("");
            setTimeout(() => {
              props.setCurStep(3);
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
                value={verificationCode}
                onChange={e => {
                  setVerificationCode(e.target.value);
                }}
                label="verification code"
              />
            </Grid>
          </Grid>
        </div>
        <button type="submit">Verify email</button>
      </form>
    </LoginFormMain>
  );
}

const mapStateToProps = state => {
  return {
    ...state.auth
  };
};

export default connect(
  mapStateToProps,
  { sendVerificationEmail }
)(VerifyEmailForm);
