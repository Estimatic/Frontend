import { CREATE_PROJECT, GET_COMPANY_PROJECTS } from "../actions/projects";

const initialState = {
  projects: [],
  shouldFetchProjects: true
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return {
        ...state,
        shouldFetchProjects: true
      };

    case GET_COMPANY_PROJECTS:
      console.log("fetched projects");
      return {
        ...state,
        projects: action.payload,
        shouldFetchProjects: false
      };

    default:
      return {
        ...state
      };
  }
};

export default projectsReducer;
