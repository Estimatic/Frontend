import React, { useState } from "react";
import styled from "styled-components";
import { Cover } from "../Cover";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// import { createCategory } from "../../../../actions/categories";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Person from "@material-ui/icons/Person";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function AddProject(props) {
  // state
  const [projectName, setProjectName] = useState("");
  const [address, setAddress] = useState("");
  const [projectStatus, setProjectStatus] = useState("pre");
  const [dueDate, setDueDate] = useState(new Date());
  const [customer, setCustomer] = useState({});
  const [assignedTo, setAssignedTo] = useState({});
  // const [companyId, setCompanyId] = useState("");

  // ui
  const { side_bar_color, secondary_color } = props.ui.colors;
  const classes = useStyles();

  return (
    <Cover
      onClick={e => {
        props.history.push("/app/projects");
      }}
    >
      <FormWrapper onClick={e => e.stopPropagation()}>
        <h4>Add Project</h4>
        <hr />
        <form
          onSubmit={e => {
            e.preventDefault();
            const newProject = {
              projectName,
              address,
              projectStatus,
              dueDate: Date.parse(dueDate)
            };
            console.log(newProject);
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
                  value={projectName}
                  onChange={e => {
                    setProjectName(e.target.value);
                  }}
                  label="project name"
                />
              </Grid>
            </Grid>
          </div>

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
                <Person />
              </Grid>
              <Grid item style={{ width: "100%", maxWidth: "300px" }}>
                <FormControl className={classes.formControl}>
                  <InputLabel>project status</InputLabel>
                  <Select
                    value={projectStatus}
                    onChange={e => setProjectStatus(e.target.value)}
                  >
                    <MenuItem value={"pre"}>pre</MenuItem>
                    <MenuItem value={"in-progress"}>in-progress</MenuItem>
                    <MenuItem value={"complete"}>complete</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>

          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item>
                <Person />
              </Grid>
              <Grid item style={{ width: "100%", maxWidth: "300px" }}>
                <DatePicker
                  selected={dueDate}
                  onChange={date => setDueDate(date)}
                  dateFormat="MMMM d, yyyy"
                />
              </Grid>
            </Grid>
          </div>

          <SubmitButton
            btnBackground={secondary_color}
            fontColor={side_bar_color}
            type="submit"
          >
            Add Project
          </SubmitButton>
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
  {}
)(withRouter(AddProject));

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
  overflow: auto;

  hr {
    opacity: 0.4;
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

const SubmitButton = styled.button`
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
`;
