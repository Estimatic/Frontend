import axios from "axios";
const dbEndpoint = process.env.DB_ENDPOINT || "http://localhost:5000";

export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const GET_COMPANY_CATEGORIES = "GET_COMPANY_CATEGORIES";

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

export const createCategory = category => {
  return async dispatch => {
    try {
      const newCategory = await axios.post(
        `${dbEndpoint}/api/categories/`,
        category
      );

      console.log("created category", newCategory);

      dispatch({ type: CREATE_CATEGORY, payload: newCategory.data });
      return true;
    } catch (err) {
      return false;
    }
  };
};

export const getCompantCategories = comapanyId => {
  return async dispatch => {
    try {
      const companyCateogires = await axios.get(
        `${dbEndpoint}/api/categories/company/${comapanyId}`
      );
      /* 
        Retrieve all related materials for each category
      */
      console.log(companyCateogires);
      dispatch({
        type: GET_COMPANY_CATEGORIES,
        payload: companyCateogires.data
      });
      return true;
    } catch (err) {
      return false;
    }
  };
};
