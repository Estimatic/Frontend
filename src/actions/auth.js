import axios from "axios";
import { LOADED_COLORS } from "./ui";
const dbEndpoint = process.env.DB_ENDPOINT || "http://localhost:5000";

export const SET_USER_INFO_SUBMISSION = "SET_USER_INFO_SUBMISSION";
export const SET_COMPANY_INFO_SUBMISSION = "SET_COMPANY_INFO_SUBMISSION";

export const START_USER_CREATION = "START_USER_CREATION";
export const USER_CREATION_SUCCESS = "USER_CREATION_SUCCESS";
export const USER_CREATION_FAIL = "USER_CREATION_FAIL";

export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

export const USER_OPENED_DASHBOARD = "USER_OPENED_DASHBOARD";
export const COMPANY_RETRIEVED = "COMPANY_RETRIEVED";

export const GET_EMPLOYEES_SUCCES = "GET_EMPLOYEES_SUCCES";

export const USER_CREATION_INVITE_SUCCESS = "USER_CREATION_INVITE_SUCCESS";
export const USER_CREATION_INVITE_FAIL = "USER_CREATION_INVITE_FAIL";

export const UPDATE_USER_INFO = "UPDATE_USER_INFO";
export const UPDATE_COMPANY_INFO = "UPDATE_COMPANY_INFO";

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

// pushed company info to state
export const handleCompanyInfoSubmission = companyInfo => dispatch => {
  dispatch({ type: SET_COMPANY_INFO_SUBMISSION, payload: companyInfo });
};

// creates a new account
// firest creates a company, then a user, then updates the
// companies owner_id with the users id
export const createNewAccountAndCompany = (companyInfo, userInfo) => {
  return async dispatch => {
    dispatch({ type: START_USER_CREATION });

    try {
      // create the company
      const newCompany = await axios.post(
        `${dbEndpoint}/api/company`,
        companyInfo
      );
      // get id off of that company
      const companyId = newCompany.data._id;
      // create the company using the returned id

      const newUser = await axios.post(
        `http://localhost:5000/api/auth/register`,
        {
          ...userInfo,
          company_id: companyId
        }
      );

      const owner_id = newUser.data.user._id;
      // update company owner with that user ID
      const updatedCompany = await axios.put(
        `${dbEndpoint}/api/company/${companyId}`,
        {
          owner_id
        }
      );
      const newCompanyAndUser = {
        updatedCompany,
        newUser
      };

      dispatch({ type: USER_CREATION_SUCCESS, payload: newCompanyAndUser });
      return true;
    } catch (err) {
      dispatch({ type: USER_CREATION_FAIL, payload: err });
      return false;
    }
  };
};

export const createNewAccount = (userInfo, invitationId) => {
  return async dispatch => {
    try {
      // create the new user
      const newUser = await axios.post(`${dbEndpoint}/api/auth/register`, {
        ...userInfo
      });

      dispatch({ type: USER_CREATION_INVITE_SUCCESS, payload: newUser });
      // delete the invitation so that it cannot be reused
      await axios.delete(`${dbEndpoint}/api/invitation/${invitationId}`);
      return true;
    } catch (err) {
      dispatch({ type: USER_CREATION_INVITE_FAIL, payload: err });
      return false;
    }
  };
};

export const loginUser = user => {
  return async dispatch => {
    try {
      const loggedInUser = await axios.post(
        `${dbEndpoint}/api/auth/login`,
        user
      );

      // if user successfulyl logged in
      if (loggedInUser.data.token) {
        localStorage.setItem("token", loggedInUser.data.token);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: loggedInUser.data.user });
        return true;
      } else {
        dispatch({ type: USER_LOGIN_FAIL });

        return false;
      }
    } catch (err) {
      dispatch({ type: USER_LOGIN_FAIL });
      return false;
    }
  };
};

// for persisting user login
export const decodeAndRetrieveUserProfile = () => {
  return async dispatch => {
    const response = await axios.get(`${dbEndpoint}/api/users/getWithJwt`);
    dispatch({ type: USER_OPENED_DASHBOARD, payload: response.data });
    const companyId = response.data["company_id"];
    const company = await axios.get(`${dbEndpoint}/api/company/${companyId}`);
    dispatch({ type: COMPANY_RETRIEVED, payload: company.data });

    const { main_color, secondary_color, side_bar_color } = company.data;

    dispatch({
      type: LOADED_COLORS,
      payload: { main_color, secondary_color, side_bar_color }
    });
  };
};

export const sendVerificationEmail = email => {
  return async dispatch => {
    const emailSend = await axios.post(
      `${dbEndpoint}/api/auth/sendVerificationEmail`,
      email
    );
    console.log(emailSend);
  };
};

export const updateUser = (newInfo, userId) => {
  return async dispatch => {
    try {
      const updatedUser = await axios.put(
        `${dbEndpoint}/api/users/${userId}`,
        newInfo
      );
      dispatch({ type: UPDATE_USER_INFO, payload: updatedUser.data });
      return true;
    } catch (e) {
      return false;
    }
  };
};

export const updateCompany = (newInfo, companyId) => {
  return async dispatch => {
    try {
      const updatedCompany = await axios.put(
        `${dbEndpoint}/api/company/${companyId}`,
        newInfo
      );
      dispatch({ type: UPDATE_COMPANY_INFO, payload: updatedCompany.data });
      return true;
    } catch (e) {
      return false;
    }
  };
};

export const updatePassword = (passInfo, userId) => {
  return async dispatch => {
    try {
      const updatedUser = await axios.put(
        `${dbEndpoint}/api/auth/updatePassword/${userId}`,
        passInfo
      );

      if (updatedUser) return true;
      return false;
    } catch (err) {
      return false;
    }
  };
};
