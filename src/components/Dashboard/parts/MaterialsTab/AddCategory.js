import React, { useState } from "react";
import styled from "styled-components";
import { Cover } from "../Cover";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { createCategory } from "../../../../actions/categories";

import Swal from "sweetalert2";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Create from "@material-ui/icons/Create";
import SignalCellular4Bar from "@material-ui/icons/SignalCellular4Bar";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  }
}));

function AddCategory(props) {
  const { side_bar_color, secondary_color } = props.ui.colors;

  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");

  const classes = useStyles();

  return (
    <Cover
      onClick={e => {
        props.history.push("/app/materials");
      }}
    >
      <FormWrapper
        btnBackground={secondary_color}
        fontColor={side_bar_color}
        onClick={e => e.stopPropagation()}
      >
        <h4>Add Category</h4>
        <hr />
        <form
          onSubmit={e => {
            e.preventDefault();
            const { company_id } = props.user;
            const newCat = {
              name,
              unit,
              company_id: company_id
            };
            console.log(newCat);
            props.createCategory(newCat).then(res => {
              if (res) {
                props.history.push("/app/materials");
                Swal.fire(
                  "Success!",
                  `We've created your new category. You can now add products to this category and use them in your estimates.`,
                  "success"
                );
              } else {
                props.history.push("/app/materials");
                Swal.fire(
                  "Oops!",
                  "There was an issue creating your category.",
                  "warning"
                );
              }
            });
          }}
        >
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item>
                <Create />
              </Grid>
              <Grid item style={{ width: "100%", maxWidth: "300px" }}>
                <TextField
                  required={true}
                  type="text"
                  fullWidth={true}
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  label="name"
                />
              </Grid>
            </Grid>
          </div>

          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item>
                <SignalCellular4Bar />
              </Grid>
              <Grid item style={{ width: "100%", maxWidth: "300px" }}>
                <TextField
                  required={true}
                  type="text"
                  fullWidth={true}
                  value={unit}
                  onChange={e => {
                    setUnit(e.target.value);
                  }}
                  label="unit"
                />
              </Grid>
            </Grid>
          </div>

          <Directions>
            <p>
              After creating a category, you can add materials to that category.
              An example of this would be a category called "shingles", with
              single shingle types living within it. A "unit" refers to a unit
              of measurement with which you measure this category. An example
              might be "lbs" or "sq feet".
            </p>
          </Directions>
          <button type="submit">Add Category</button>
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
  { createCategory }
)(withRouter(AddCategory));

const FormWrapper = styled.div`
  margin: auto;
  margin-top: 104px;
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

const companyColor = "#0D076F";
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
