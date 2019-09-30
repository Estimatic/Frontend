import React, { useState } from "react";
import styled from "styled-components";
import { Cover } from "../Cover";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Swal from "sweetalert2";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Email from "@material-ui/icons/Email";
import Person from "@material-ui/icons/Person";
import House from "@material-ui/icons/House";

import { createCustomer } from "../../../../actions/customers";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  }
}));

function CreateCustomer(props) {
  const { side_bar_color, secondary_color } = props.ui.colors;

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");

  const classes = useStyles();

  return (
    <Cover
      onClick={e => {
        props.history.push("/app/customers");
      }}
    >
      <FormWrapper
        btnBackground={secondary_color}
        fontColor={side_bar_color}
        onClick={e => e.stopPropagation()}
      >
        <h4>Create Customer</h4>
        <hr />
        <form
          onSubmit={e => {
            e.preventDefault();
            const newCustomer = {
              address,
              email,
              full_name: fullName,
              company_id: props.user.company_id
            };
            console.log(newCustomer);
            props.createCustomer(newCustomer).then(res => {
              if (res) {
                Swal.fire(
                  "Success!",
                  `We've created you new customer: ${fullName}.`,
                  "success"
                );
              } else {
                Swal.fire(
                  "Oops!",
                  "There was an issue creating your customer.",
                  "warning"
                );
              }
              props.history.push("/app/customers");
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
                  required={true}
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
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item>
                <House />
              </Grid>
              <Grid item style={{ width: "100%", maxWidth: "300px" }}>
                <TextField
                  required={true}
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
          <Directions>
            <p>
              After creating a customer, you will be able to create projects
              assigned to them.
            </p>
          </Directions>
          <button type="submit">Create Customer</button>
        </form>
      </FormWrapper>
    </Cover>
  );
}

const mapStateToProps = state => {
  return {
    user: { ...state.auth.user },
    ui: { ...state.ui }
  };
};

export default connect(
  mapStateToProps,
  { createCustomer }
)(withRouter(CreateCustomer));

const FormWrapper = styled.div`
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
    background: ${props =>
      props.btnBackground ||
      `linear-gradient(
      45deg,
      rgba(62, 132, 197, 1) 33%,
      rgba(60, 103, 190, 1) 61%,
      rgba(59, 73, 184, 1) 91%,
      rgba(59, 73, 184, 1) 93%,
      rgba(59, 73, 184, 1) 100%
    )`};
    color: ${props => props.fontColor || "white"};
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
