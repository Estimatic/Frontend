import {
  SET_USER_INFO_SUBMISSION,
  SET_COMPANY_INFO_SUBMISSION
} from "../actions/auth";

const initialState = {
  user: {},
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
          companyName
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

    default:
      return {
        ...state
      };
  }
};

export default authReducer;
