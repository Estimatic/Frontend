import axios from "axios";
const dbEndpoint = process.env.DB_ENDPOINT || "http://localhost:5000";

export const CREATE_CUSTOMER = "CREATE_CUSTOMER";
export const GET_COMPANY_CUSTOMERS = "GET_COMPANY_CUSTOMERS";

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

export const createCustomer = customer => {
  return async dispatch => {
    try {
      const newCustomer = await axios.post(
        `${dbEndpoint}/api/customers/`,
        customer
      );

      dispatch({ type: CREATE_CUSTOMER, payload: newCustomer.data });
      return true;
    } catch (err) {
      return false;
    }
  };
};

export const getAllCompanyCustomers = companyId => {
  return async dispatch => {
    try {
      const allCustomers = await axios.get(
        `${dbEndpoint}/api/customers/company/${companyId}`
      );

      dispatch({ type: GET_COMPANY_CUSTOMERS, payload: allCustomers.data });
      return true;
    } catch (err) {
      return false;
    }
  };
};
