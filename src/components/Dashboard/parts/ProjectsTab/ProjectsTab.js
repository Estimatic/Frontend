import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import withData from "../../../DataFetchingHOC";

import Button from "@material-ui/core/Button";

import { ViewWrapper } from "../ViewWrapper";
import {
  NewProjectButton,
  SingleProjectChip,
  SingleProjectChipStatus,
  SingleProjectChipInfo,
  TopSection
} from "./ProjectsStyles";

function ProjectsTab(props) {
  // const { main_color, secondary_color } = props.ui.colors;

  const isProjectLate = (dueDate, status) => {
    const currentDate = Date.now();
    if (dueDate < currentDate && status !== "complete") {
      return <h5 style={{ color: "#E62B00" }}>late</h5>;
    } else {
      return <h5 style={{ color: "#5AB18F" }}>OK</h5>;
    }
  };

  const getCustomerName = customerId => {
    const correctCustomer = props.customers.filter(c => c._id === customerId);

    return correctCustomer.length ? correctCustomer[0].full_name : "";
  };

  const getEmployeeName = employeeId => {
    const correctEmployee = props.employees.filter(e => e._id === employeeId);

    return correctEmployee.length ? correctEmployee[0].full_name : "";
  };

  const { side_bar_color, secondary_color } = props.ui.colors;
  const showCorrectButton = isEstimated => {
    return isEstimated ? (
      <button
        style={{
          backgroundColor: secondary_color || "#0D076F",
          color: side_bar_color || "white",
          fontSize: "12px",
          cursor: "pointer",
          padding: "4px 8px",
          borderRadius: "4px"
        }}
        onClick={() => {
          // props.history.push("/app/customers/create");
        }}
      >
        view estimate
      </button>
    ) : (
      <button
        style={{
          backgroundColor: secondary_color || "#0D076F",
          color: side_bar_color || "white",
          fontSize: "12px",
          cursor: "pointer",
          padding: "4px 8px",
          borderRadius: "4px"
        }}
        onClick={() => {
          // props.history.push("/app/customers/create");
        }}
      >
        create estimate
      </button>
    );
  };

  return (
    <ViewWrapper>
      <h3>Your Projects</h3>
      <hr style={{ marginBottom: "16px" }} />
      <NewProjectButton
        onClick={() => props.history.push("/app/projects/create")}
        colors={props.ui.colors}
      >
        Add Project
      </NewProjectButton>

      {props.projects.length ? (
        props.projects.map(project => {
          return (
            <SingleProjectChip key={project._id}>
              <SingleProjectChipStatus status={project.project_status} />
              <SingleProjectChipInfo>
                <TopSection>
                  <h3>{project.project_name}</h3>
                  {isProjectLate(project.due_date, project.project_status)}
                </TopSection>
                <hr />
                <p>
                  customer: <strong>{getCustomerName(project.customer)}</strong>
                </p>
                <p>
                  address: <strong>{project.address}</strong>
                </p>
                <p>
                  assigned to:{" "}
                  <strong>{getEmployeeName(project.assigned_to)}</strong>
                </p>
                {showCorrectButton(project.is_estimated)}
              </SingleProjectChipInfo>
            </SingleProjectChip>
          );
        })
      ) : (
        <div>No projects to show </div>
      )}
    </ViewWrapper>
  );
}

const mapStateToProps = state => {
  return {
    ui: { ...state.ui },
    projects: state.projects.projects,
    employees: state.employees.employees,
    customers: state.customers.customers
  };
};

export default withData(
  connect(
    mapStateToProps,
    {}
  )(withRouter(ProjectsTab))
);
