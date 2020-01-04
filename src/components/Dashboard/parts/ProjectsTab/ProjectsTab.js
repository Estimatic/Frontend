import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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
    assignedTo: {
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
    projectName: "Example Project Name",
    address: "1065 W Minnehaha Ave., Clermont, FL 34711",
    dueDate: 1578106306627, // time stamp, not sure exatly which way ill store it yet, but probably Date.now()
    projectStatus: "pre", // pre -> in-progress -> complete
    isEstimated: false // flag to show wether or not there is an estamte for this yet
  },
  {
    id: "912jf9ahd9au3h",
    assignedTo: {
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
    projectName:
      "Cassandra Anderson - 1748 Perth st, Jacksonville, FL 04918 (Jeffery Smith)",
    address: "1748 Perth st, Jacksonville, FL 04918",
    dueDate: 1578106306627, // time stamp, not sure exatly which way ill store it yet, but probably Date.now()
    projectStatus: "in-progress", // pre -> in-progress -> complete
    isEstimated: true // flag to show wether or not there is an estamte for this yet
  },
  {
    id: "9ajd91j8hda",
    assignedTo: {
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
    projectName: "Example Project Name",
    address: "1748 Perth st, Jacksonville, FL 04918",
    dueDate: 1578106306672, // time stamp, not sure exatly which way ill store it yet, but probably Date.now()
    projectStatus: "complete", // pre -> in-progress -> complete
    isEstimated: true // flag to show wether or not there is an estamte for this yet
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
              <p>{project.projectName}</p>
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

export default connect(
  mapStateToProps,
  {}
)(withRouter(ProjectsTab));
