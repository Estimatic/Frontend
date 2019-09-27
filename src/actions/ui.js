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

export const CHANGE_CUR_TAB = "CHANGE_CUR_TAB";

export const LOADED_COLORS = "UPDATED_COLORS";
export const UPDATED_COLORS_ERROR = "UPDATED_COLORS_ERROR";

export const changeCurTab = tab => dispatch => {
  dispatch({ type: CHANGE_CUR_TAB, payload: tab });
};

export const updateCompanyColors = (colors, companyId) => {
  return async dispatch => {
    try {
      const updatedCompanyColors = await axios.put(
        `${dbEndpoint}/api/company/${companyId}`,
        colors
      );
      const {
        main_color,
        secondary_color,
        side_bar_color
      } = updatedCompanyColors.data;

      dispatch({
        type: LOADED_COLORS,
        payload: {
          main_color,
          secondary_color,
          side_bar_color
        }
      });
      return true;
    } catch (err) {
      dispatch({
        type: UPDATED_COLORS_ERROR
      });
      return false;
    }
  };
};
