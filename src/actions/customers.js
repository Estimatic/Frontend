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

// this probably shouldnt be pinging for coordinates EVERY time
// gotta think through exactly what the best move for this will be
export const getAllCompanyCustomers = companyId => {
  return async dispatch => {
    try {
      const allCustomers = await axios.get(
        `${dbEndpoint}/api/customers/company/${companyId}`
      );

      const customersWithGeocodedDate = await Promise.all(
        allCustomers.data.map(async customer => {
          const queryString = customer.address.split(" ").join("_");

          const geocodedCoordinates = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${queryString}.json?access_token=${process.env.REACT_APP_MAP_BOX_TOKEN}`
          );
          return {
            ...customer,
            coordinates: geocodedCoordinates.data.features[0].center
          };
        })
      );

      dispatch({
        type: GET_COMPANY_CUSTOMERS,
        payload: customersWithGeocodedDate
      });
      return true;
    } catch (err) {
      return false;
    }
  };
};
