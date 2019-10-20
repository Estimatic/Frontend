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
import Description from "@material-ui/icons/Description";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import Grade from "@material-ui/icons/Grade";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  }
}));

function AddMaterial(props) {
  const { side_bar_color, secondary_color } = props.ui.colors;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [grade, setGrade] = useState("");

  const classes = useStyles();

  const checkCorrectGrade = checkedGrade => {
    if (
      checkedGrade === "A" ||
      checkedGrade === "B" ||
      checkedGrade === "C" ||
      checkedGrade === "D" ||
      checkedGrade === "F"
    ) {
      return true;
    }
    return false;
  };

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
        <h4>Add Material</h4>
        <hr />
        <form
          onSubmit={e => {
            e.preventDefault();
            // check for correct grade, should just change to drop down
            if (!checkCorrectGrade(grade)) {
              Swal.fire(
                "Oops!",
                "'grade' must be one of the following: A, B, C, D, F.",
                "warning"
              );
              return;
            }

            const newMaterial = {
              grade,
              name,
              description,
              quantity,
              photoUrl: "",
              category_id: props.match.params.id
            };

            console.log(newMaterial);
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
                <Description />
              </Grid>
              <Grid item style={{ width: "100%", maxWidth: "300px" }}>
                <TextField
                  required={true}
                  type="text"
                  fullWidth={true}
                  value={description}
                  onChange={e => {
                    setDescription(e.target.value);
                  }}
                  label="description"
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item>
                <ArrowDropUp />
              </Grid>
              <Grid item style={{ width: "100%", maxWidth: "300px" }}>
                <TextField
                  required={true}
                  type="number"
                  fullWidth={true}
                  value={quantity}
                  onChange={e => {
                    setQuantity(e.target.value);
                  }}
                  label="quantity"
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item>
                <Grade />
              </Grid>
              <Grid item style={{ width: "100%", maxWidth: "300px" }}>
                <TextField
                  required={true}
                  type="text"
                  fullWidth={true}
                  value={grade}
                  onChange={e => {
                    setGrade(e.target.value);
                  }}
                  label="grade"
                />
              </Grid>
            </Grid>
          </div>

          <Directions>
            <p>
              This material will be added to it's corresponding category.
              "quantity" is measured in the item's given unit. For example, if
              you enter "10" and this item is measured in "lbs", we'll calculate
              each of this item as "10 lbs" when creating your estimate.
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
)(withRouter(AddMaterial));

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
