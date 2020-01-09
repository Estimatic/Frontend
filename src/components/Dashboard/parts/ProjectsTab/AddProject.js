import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Cover } from "../Cover";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllCompanyEmployees } from "../../../../actions/employees";
import { getAllCompanyCustomers } from "../../../../actions/customers";
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
    minWidth: 240
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
  const [customer, setCustomer] = useState("select a customer");
  const [assignedTo, setAssignedTo] = useState("assign an employee");

  // fetch necessary info if not already loaded
  const {
    companyId,
    getAllCompanyEmployees,
    shouldFetchEmployees,
    shouldFetchCustomers,
    getAllCompanyCustomers
  } = props;
  useEffect(() => {
    if (companyId && shouldFetchEmployees) {
      console.log("fetching employees");
      getAllCompanyEmployees(companyId);
    }
  }, [companyId, getAllCompanyEmployees, shouldFetchEmployees]);
  useEffect(() => {
    if (companyId && shouldFetchCustomers) {
      console.log("fetched customers");
      getAllCompanyCustomers(companyId);
    }
  }, [companyId, getAllCompanyCustomers, shouldFetchCustomers]);

  // ui
  const { side_bar_color, secondary_color } = props.ui.colors;
  const classes = useStyles();

  const handelSetCustomer = e => {
    if (e.target.value === "select a customer") {
      setCustomer("select a customer");
      return;
    }
    if (!projectName) {
      // if value of projectName is an empty string, create a default project name with info we have
      const currentCustomer = props.customers.filter(
        curCustomer =>
          `${curCustomer.full_name} - ${curCustomer.address.substring(
            0,
            8
          )}...` === e.target.value
      )[0];
      setProjectName(`${currentCustomer.full_name} Project`);
      setAddress(currentCustomer.address);
    }
    setCustomer(e.target.value);
  };

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
            // handel unassigned employees and customers
            if (
              assignedTo === "assign an employee" ||
              customer === "select a customer"
            ) {
              alert("please provide both a customer and an assigned employee");
              return;
            }

            // find coresponding ID for assigned employees and customers
            const assignedEmployeeId = props.employees.filter(
              employee =>
                `${employee.full_name} - ${employee._id}` === assignedTo
            )[0]._id;

            const assignedCustomerId = props.customers.filter(
              curCustomer =>
                `${curCustomer.full_name} - ${curCustomer.address.substring(
                  0,
                  8
                )}...` === customer
            )[0]._id;

            const newProject = {
              projectName,
              address,
              projectStatus,
              dueDate: Date.parse(dueDate),
              assignedTo: assignedEmployeeId,
              customer: assignedCustomerId,
              company_id: props.user.company_id
            };
            console.log(newProject);
          }}
        >
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item>
                <Person />
              </Grid>
              <Grid item>
                <FormControl className={classes.formControl}>
                  <InputLabel>Assign Employee</InputLabel>
                  <Select
                    value={assignedTo}
                    onChange={e => setAssignedTo(e.target.value)}
                  >
                    <MenuItem value="assign an employee">
                      assign an employee
                    </MenuItem>
                    {props.employees.map(employee => {
                      // a note to future me, setting the value as `${employee.full_name} - ${employee._id}` as opposed to the full customer object
                      // because of some limitations with the Select component. Need the value to === an actual Options value to
                      // be a controlled component
                      return (
                        <MenuItem
                          key={employee._id}
                          value={`${employee.full_name} - ${employee._id}`}
                        >
                          {employee.full_name}
                        </MenuItem>
                      );
                    })}
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
              <Grid item>
                <FormControl className={classes.formControl}>
                  <InputLabel>Choose Customer</InputLabel>
                  <Select value={customer} onChange={handelSetCustomer}>
                    <MenuItem value="select a customer">
                      select a customer
                    </MenuItem>
                    {props.customers.map(customer => {
                      // a note to future me, setting the valuve as customer.full_name as opposed to the full customer object
                      // because of some limitations with the Select component. Need the value to === an actual options value to
                      // be a controlled component
                      return (
                        <MenuItem
                          key={customer._id}
                          value={`${
                            customer.full_name
                          } - ${customer.address.substring(0, 8)}...`}
                        >
                          {/* including a bit of the address in case of multiple customers w same name */}
                          {`${
                            customer.full_name
                          } - ${customer.address.substring(0, 8)}...`}
                        </MenuItem>
                      );
                    })}
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
    ui: { ...state.ui },
    customers: state.customers.customers,
    employees: state.employees.employees,
    shouldFetchEmployees: state.employees.shouldFetchEmployees,
    shouldFetchCustomers: state.customers.shouldFetchCustomers,
    companyId: state.auth.user["company_id"]
  };
};

export default connect(
  mapStateToProps,
  { getAllCompanyEmployees, getAllCompanyCustomers }
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
