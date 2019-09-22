import axios from "axios";
// wether or not ill use this im not sure
// nice to have a spot for some general use actions
axios.interceptors.request.use(
  function(config) {
    config.headers["Authorization"] = localStorage.getItem("token") || "";
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export const placeholder = () => dispatch => {
  return "this is just a placeholder";
};
