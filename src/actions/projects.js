import axios from "axios";
const dbEndpoint = process.env.DB_ENDPOINT || "http://localhost:5000";

// sets auth header automatically
axios.interceptors.request.use(
  function(config) {
    config.headers["Authorization"] = localStorage.getItem("token") || "";
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export const CREATE_PROJECT = "CREATE_PROJECT";
export const GET_COMPANY_PROJECTS = "GET_COMPANY_PROJECTS";

export const createProject = project => {
  return async dispatch => {
    try {
      const newProject = await axios.post(
        `${dbEndpoint}/api/projects/`,
        project
      );

      console.log("created category", newProject);

      dispatch({ type: CREATE_PROJECT, payload: newProject.data });
      return true;
    } catch (err) {
      return false;
    }
  };
};

export const getAllCompanyProjects = companyId => {
  return async dispatch => {
    try {
      const allProjects = await axios.get(
        `${dbEndpoint}/api/projects/company/${companyId}`
      );
      dispatch({
        type: GET_COMPANY_PROJECTS,
        payload: allProjects.data
      });
      return true;
    } catch (err) {
      return false;
    }
  };
};
