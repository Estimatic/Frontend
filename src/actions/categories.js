import axios from "axios";
const dbEndpoint = process.env.DB_ENDPOINT || "http://localhost:5000";

export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const CREATE_MATERIAL = "CREATE_MATERIAL";
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
      const allCats = companyCateogires.data;
      const catsWithMaterials = await Promise.all(
        allCats.map(async cat => {
          const relevantMats = await axios.get(
            `${dbEndpoint}/api/materials/category/${cat._id}`
          );
          return {
            ...cat,
            materials: relevantMats.data
          };
        })
      );

      dispatch({
        type: GET_COMPANY_CATEGORIES,
        payload: catsWithMaterials
      });
      return true;
    } catch (err) {
      return false;
    }
  };
};

export const createMaterial = material => {
  return async dispatch => {
    try {
      console.log("new material being created: ", material);
      const newMaterial = await axios.post(
        `${dbEndpoint}/api/materials`,
        material
      );

      dispatch({ type: CREATE_MATERIAL, payload: newMaterial.data });
      return true;
    } catch (err) {
      return false;
    }
  };
};
