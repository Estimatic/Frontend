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

      {props.projects.length ? (
        props.projects.map(project => {
          return (
            <SingleProjectChip key={project._id}>
              <SingleProjectChipStatus status={project.project_status} />
              <SingleProjectChipInfo>
                <p>{project.project_name}</p>
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
    projects: state.projects.projects
  };
};

export default withData(
  connect(
    mapStateToProps,
    {}
  )(withRouter(ProjectsTab))
);
