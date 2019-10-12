import axios from "axios";
const dbEndpoint = process.env.DB_ENDPOINT || "http://localhost:5000";

export const CREATE_CATEGORY = "CREATE_CATEGORY";

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
