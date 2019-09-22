import {
  SET_USER_INFO_SUBMISSION,
  SET_COMPANY_INFO_SUBMISSION,
  USER_CREATION_SUCCESS
} from "../actions/auth";

// user and company will be used whenever logging in or after creating an account
// signingUpUser and settingUpcompany are used for storing info in sign up forms for submission
// emailConfirmationNumber stores number that is sent to email to be confirmed
const initialState = {
  user: {},
  company: {},
  signingUpUser: {},
  settingUpCompany: {},
  emailConfirmationNumber: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO_SUBMISSION:
      const {
        email,
        full_name,
        password,
        companyName,
        emailConfirmationNumber
      } = action.payload;
      return {
        ...state,
        signingUpUser: {
          email,
          full_name,
          password
        },
        settingUpCompany: {
          name: companyName
        },
        emailConfirmationNumber
      };
    case SET_COMPANY_INFO_SUBMISSION:
      const { phone, numEmployees, homeState, city, address } = action.payload;
      return {
        ...state,
        settingUpCompany: {
          ...state.settingUpCompany,
          phone,
          numEmployees,
          homeState,
          city,
          address
        }
      };

    case USER_CREATION_SUCCESS:
      return {
        ...state,
        user: { ...action.payload.newUser.data.user },
        company: { ...action.payload.updatedCompany.data }
      };

    default:
      return {
        ...state
      };
  }
};

export default authReducer;
