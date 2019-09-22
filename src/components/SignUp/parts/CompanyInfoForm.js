import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { LoginFormMain } from "../SignUpStyles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Phone from "@material-ui/icons/Phone";
import People from "@material-ui/icons/People";
import House from "@material-ui/icons/House";

import { handleCompanyInfoSubmission } from "../../../actions/auth";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  }
}));

function CompanyInfoform(props) {
  const [numEmployees, setNumEmployees] = useState("");
  const [homeState, setHomeState] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const classes = useStyles();
  return (
    <LoginFormMain>
      <h4>Company Info</h4>
      <hr />
      <p>Great! Now we just need a bit more info on your company.</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log("completing sign up");
          const newCompany = {
            phone,
            numEmployees,
            homeState,
            city,
            address
          };

          props.handleCompanyInfoSubmission(newCompany);
          props.history.push("/login");
        }}
      >
        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item>
              <Phone />
            </Grid>
            <Grid item style={{ width: "100%", maxWidth: "300px" }}>
              <TextField
                type="number"
                fullWidth={true}
                value={phone}
                onChange={e => {
                  setPhone(e.target.value);
                }}
                label="phone number"
              />
            </Grid>
          </Grid>
        </div>

        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item>
              <People />
            </Grid>
            <Grid item style={{ width: "100%", maxWidth: "300px" }}>
              <TextField
                type="number"
                fullWidth={true}
                value={numEmployees}
                onChange={e => {
                  setNumEmployees(e.target.value);
                }}
                label="number of employees"
              />
            </Grid>
          </Grid>
        </div>

        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item>
              <House />
            </Grid>
            <Grid item style={{ width: "100%", maxWidth: "300px" }}>
              <TextField
                type="text"
                fullWidth={true}
                value={homeState}
                onChange={e => {
                  setHomeState(e.target.value);
                }}
                label="state"
              />
            </Grid>
          </Grid>
        </div>

        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item>
              <House />
            </Grid>
            <Grid item style={{ width: "100%", maxWidth: "300px" }}>
              <TextField
                type="address"
                fullWidth={true}
                value={city}
                onChange={e => {
                  setCity(e.target.value);
                }}
                label="city"
              />
            </Grid>
          </Grid>
        </div>

        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item>
              <House />
            </Grid>
            <Grid item style={{ width: "100%", maxWidth: "300px" }}>
              <TextField
                type="address"
                fullWidth={true}
                value={address}
                onChange={e => {
                  setAddress(e.target.value);
                }}
                label="address"
              />
            </Grid>
          </Grid>
        </div>

        <button type="submit">Complete</button>
      </form>
    </LoginFormMain>
  );
}

const mapStateToProps = state => {
  return {
    ...state.auth
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { handleCompanyInfoSubmission }
  )(CompanyInfoform)
);
