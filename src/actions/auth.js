import axios from "axios";

export const SET_USER_INFO_SUBMISSION = "SET_USER_INFO_SUBMISSION";
export const SET_COMPANY_INFO_SUBMISSION = "SET_COMPANY_INFO_SUBMISSION";

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

// handle first form in account creation
export const handleUserInfoSubmission = userInfo => dispatch => {
  // generate random 6 digit number and set it to the user info dispatch
  const emailConfirmationNumber = Math.floor(100000 + Math.random() * 900000);
  userInfo.emailConfirmationNumber = emailConfirmationNumber;
  dispatch({ type: SET_USER_INFO_SUBMISSION, payload: userInfo });
};

export const handleCompanyInfoSubmission = companyInfo => dispatch => {
  dispatch({ type: SET_COMPANY_INFO_SUBMISSION, payload: companyInfo });
};
