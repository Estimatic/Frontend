import axios from "axios";
const dbEndpoint = process.env.DB_ENDPOINT || "http://localhost:5000";

export const GET_EMPLOYEES_SUCCES = "GET_EMPLOYEES_SUCCES";
export const GET_EMPLOYEES_FAIL = "GET_EMPLOYEES_FAIL";

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

export const getAllCompanyEmployees = companyId => {
  return async dispatch => {
    try {
      const allEmployees = await axios.get(
        `${dbEndpoint}/api/users/company/${companyId}`
      );

      dispatch({ type: GET_EMPLOYEES_SUCCES, payload: allEmployees.data });
    } catch (err) {
      dispatch({ type: GET_EMPLOYEES_FAIL });
    }
  };
};
