import {
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAIL,
  GET_INVITATION_SUCCESS
  // INVITE_EMPLOYEE_SUCCESS
} from "../actions/employees";

const initialState = {
  employees: [],
  invitation: {},
  shouldFetchEmployees: true
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: action.payload,
        shouldFetchEmployees: false
      };

    case GET_EMPLOYEES_FAIL:
      // just a note to self to think through error handeling for stuff like this :)
      return {
        ...state
      };

    // case INVITE_EMPLOYEE_SUCCESS:
    //   return {
    //     shouldFetchEmployees: true
    //   };

    case GET_INVITATION_SUCCESS:
      const invitation = action.payload;
      return {
        ...state,
        invitation: { ...invitation }
      };

    default:
      return {
        ...state
      };
  }
};

export default employeeReducer;
