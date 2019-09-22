import axios from "axios";
const dbEndpoint = process.env.DB_ENDPOINT || "http://localhost:5000";

export const SET_USER_INFO_SUBMISSION = "SET_USER_INFO_SUBMISSION";
export const SET_COMPANY_INFO_SUBMISSION = "SET_COMPANY_INFO_SUBMISSION";

export const START_USER_CREATION = "START_USER_CREATION";
export const USER_CREATION_SUCCESS = "USER_CREATION_SUCCESS";
export const USER_CREATION_FAIL = "USER_CREATION_FAIL";

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
  console.log(emailConfirmationNumber);
  userInfo.emailConfirmationNumber = emailConfirmationNumber;
  dispatch({ type: SET_USER_INFO_SUBMISSION, payload: userInfo });
};

export const handleCompanyInfoSubmission = companyInfo => dispatch => {
  dispatch({ type: SET_COMPANY_INFO_SUBMISSION, payload: companyInfo });
};

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
