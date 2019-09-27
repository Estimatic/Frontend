import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Cover } from "./Cover";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Email from "@material-ui/icons/Email";
import Person from "@material-ui/icons/Person";
import House from "@material-ui/icons/House";
import Phone from "@material-ui/icons/Phone";
import Flag from "@material-ui/icons/Flag";
import Lock from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";

// import Swal from "sweetalert2";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  }
}));

function AccountSettings(props) {
  const { main_color, side_bar_color, secondary_color } = props.ui.colors;

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [companyState, setCompanyState] = useState("");
  const [phone, setPhone] = useState("");

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [rtNewPass, setRtNewPass] = useState("");

  const classes = useStyles();

  useEffect(() => {
    console.log(props);
    if (props.user.email) {
      setEmail(props.user.email);
    }
    if (props.user["full_name"]) {
      setFullName(props.user["full_name"]);
    }
    if (props.company["name"]) {
      setCompanyName(props.company["name"]);
    }
    if (props.company.city) {
      setCity(props.company.city);
    }
    if (props.company.state) {
      setCompanyState(props.company.state);
    }
    if (props.company.phone) {
      setPhone(props.company.phone);
    }
    if (props.company.address) {
      setAddress(props.company.address);
    }
  }, [props.user, props.company]);

  return (
    <Cover
      onClick={e => {
        props.history.push("/app");
      }}
    >
      <DisplayWrapper
        labelColor={secondary_color}
        onClick={e => e.stopPropagation()}
      >
        <h4>Account Settings</h4>
        <hr />
        <h5>Personal Info</h5>
        <SectionWrapper>
          <EditImageWrapper>
            <img
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                margin: "auto",
                marginBottom: "16px",
                marginTop: "36px"
              }}
              alt="user avatar"
              src={
                props.user.photoUrl ||
                "https://www.legaseeds.com/assets/user_placeholder.svg"
              }
            />
            <input type="file" />
          </EditImageWrapper>
          <EditInputsWrapper>
            <div className={classes.margin}>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                  <Email />
                </Grid>
                <Grid item style={{ width: "100%", maxWidth: "370px" }}>
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
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                  <Person />
                </Grid>
                <Grid item style={{ width: "100%", maxWidth: "370px" }}>
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
            <Button
              size="medium"
              style={{
                backgroundColor: main_color || null,
                color: side_bar_color || "white"
              }}
            >
              Save
            </Button>
          </EditInputsWrapper>
        </SectionWrapper>
        <hr />
        <h5>Company Info</h5>
        <SectionWrapper>
          <EditInputsWrapper>
            <div className={classes.margin}>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                  <Flag />
                </Grid>
                <Grid item style={{ width: "100%", maxWidth: "370px" }}>
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
            <div className={classes.margin}>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                  <House />
                </Grid>
                <Grid item style={{ width: "100%", maxWidth: "370px" }}>
                  <TextField
                    type="text"
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
            <div className={classes.margin}>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                  <House />
                </Grid>
                <Grid item style={{ width: "100%", maxWidth: "370px" }}>
                  <TextField
                    type="text"
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
                <Grid item style={{ width: "100%", maxWidth: "370px" }}>
                  <TextField
                    type="text"
                    fullWidth={true}
                    value={companyState}
                    onChange={e => {
                      setCompanyState(e.target.value);
                    }}
                    label="state"
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                  <Phone />
                </Grid>
                <Grid item style={{ width: "100%", maxWidth: "370px" }}>
                  <TextField
                    type="text"
                    fullWidth={true}
                    value={phone}
                    onChange={e => {
                      setPhone(e.target.value);
                    }}
                    label="phone"
                  />
                </Grid>
              </Grid>
            </div>
            <Button
              size="medium"
              style={{
                backgroundColor: main_color || null,
                color: side_bar_color || "white"
              }}
            >
              Save
            </Button>
          </EditInputsWrapper>
        </SectionWrapper>
        <hr />
        <h5>Change Password</h5>
        <SectionWrapper>
          <EditInputsWrapper>
            <div className={classes.margin}>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                  <Lock />
                </Grid>
                <Grid item style={{ width: "100%", maxWidth: "370px" }}>
                  <TextField
                    type="text"
                    fullWidth={true}
                    value={oldPass}
                    onChange={e => {
                      setOldPass(e.target.value);
                    }}
                    label="old password"
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                  <Lock />
                </Grid>
                <Grid item style={{ width: "100%", maxWidth: "370px" }}>
                  <TextField
                    type="text"
                    fullWidth={true}
                    value={newPass}
                    onChange={e => {
                      setNewPass(e.target.value);
                    }}
                    label="new password"
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                  <Lock />
                </Grid>
                <Grid item style={{ width: "100%", maxWidth: "370px" }}>
                  <TextField
                    type="text"
                    fullWidth={true}
                    value={rtNewPass}
                    onChange={e => {
                      setRtNewPass(e.target.value);
                    }}
                    label="re-type new password"
                  />
                </Grid>
              </Grid>
            </div>
            <Button
              size="medium"
              style={{
                backgroundColor: main_color || null,
                color: side_bar_color || "white"
              }}
            >
              Save
            </Button>
          </EditInputsWrapper>
        </SectionWrapper>
      </DisplayWrapper>
    </Cover>
  );
}

const mapStateToProps = state => {
  return {
    user: { ...state.auth.user },
    company: { ...state.auth.company },
    ui: { ...state.ui }
  };
};

export default connect(
  mapStateToProps,
  {}
)(withRouter(AccountSettings));

const DisplayWrapper = styled.div`
  margin: auto;
  margin-top: 64px;
  margin-bottom: 0px;
  width: 90%;
  max-width: 450px;
  margin-bottom: 32px;
  padding: 16px;
  background: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.4);
  max-height: 80vh;
  overflow: scroll;

  hr {
    opacity: 0.4;
    margin: 16px 0;
  }

  button {
    margin-left: 16px;
    margin-top: 32px;
    width: 125px;
  }

  h4 {
    font-size: 32px;
    margin: 0 16px;
    font-weight: 400;
  }
  h5 {
    color: ${props => props.labelColor || "rgba(0, 0, 0, 0.4)"};
    font-size: 24px;
    margin: 0;
    margin-bottom: 8px;
    margin-left: 16px
    font-weight: 600;
  }
`;

const SectionWrapper = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.025);
  padding-bottom: 16px;
`;

const EditImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EditInputsWrapper = styled.div`
  width: 100%;
  padding: 24px 8px;
`;
