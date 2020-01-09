import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import withData from "../../../DataFetchingHOC";

import { ViewWrapper } from "../ViewWrapper";
import {
  NewProjectButton,
  SingleProjectChip,
  SingleProjectChipStatus,
  SingleProjectChipInfo
} from "./ProjectsStyles";

const fakeData = [
  {
    id: "1231241ad1af23da",
    assigned_it: {
      // will be a an employee Id
      full_name: "Jeffery Smith",
      email: "jeffery.smith@gmail.com"
    },
    customer: {
      // will be a customer Id
      full_name: "Tom Hessburg",
      email: "thomas.hessburg@gmail.com",
      address: "1065 W Minnehaha Ave., Clermont, FL 34711"
    },
    project_name: "Example Project Name",
    address: "1065 W Minnehaha Ave., Clermont, FL 34711",
    due_date: 1578106306627, // time stamp, not sure exatly which way ill store it yet, but probably Date.now()
    projectStatus: "pre", // pre -> in-progress -> complete
    is_estimated: false // flag to show wether or not there is an estamte for this yet
  },
  {
    id: "912jf9ahd9au3h",
    assigned_it: {
      // will be a an employee Id
      full_name: "Jeffery Smith",
      email: "jeffery.smith@gmail.com"
    },
    customer: {
      // will be a customer Id
      full_name: "Cassandra Anderson",
      email: "cass.and103g@gmail.com",
      address: "1748 Perth st, Jacksonville, FL 04918"
    },
    project_name: "Cassandra Anderson Project",
    address: "1748 Perth st, Jacksonville, FL 04918",
    due_date: 1578106306627, // time stamp, not sure exatly which way ill store it yet, but probably Date.now()
    projectStatus: "in-progress", // pre -> in-progress -> complete
    is_estimated: true // flag to show wether or not there is an estamte for this yet
  },
  {
    id: "9ajd91j8hda",
    assigned_it: {
      // will be a an employee Id
      full_name: "Jeffery Smith",
      email: "jeffery.smith@gmail.com"
    },
    customer: {
      // will be a customer Id
      full_name: "Fillipe Estrada",
      email: "fillipeg@gmail.com",
      address: "1781 Main st, Jacksonville, FL 04918"
    },
    project_name: "Example Project Name",
    address: "1748 Perth st, Jacksonville, FL 04918",
    due_date: 1578106306672, // time stamp, not sure exatly which way ill store it yet, but probably Date.now()
    projectStatus: "complete", // pre -> in-progress -> complete
    is_estimated: true // flag to show wether or not there is an estamte for this yet
  }
];

function ProjectsTab(props) {
  // const { main_color, secondary_color } = props.ui.colors;

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

      {fakeData.map(project => {
        return (
          <SingleProjectChip key={project.id}>
            <SingleProjectChipStatus status={project.projectStatus} />
            <SingleProjectChipInfo>
              <p>{project.project_name}</p>
            </SingleProjectChipInfo>
          </SingleProjectChip>
        );
      })}
    </ViewWrapper>
  );
}

const mapStateToProps = state => {
  return {
    ui: { ...state.ui }
  };
};

export default withData(
  connect(
    mapStateToProps,
    {}
  )(withRouter(ProjectsTab))
);
