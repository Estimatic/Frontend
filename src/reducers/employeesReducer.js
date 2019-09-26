import { GET_EMPLOYEES_SUCCES, GET_EMPLOYEES_FAIL } from "../actions/employees";

const initialState = {
  employees: []
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES_SUCCES:
      return {
        ...state,
        employees: action.payload
      };

    case GET_EMPLOYEES_FAIL:
      // just a note to self to think through error handeling for stuff like this :)
      return {
        ...state
      };

    default:
      return {
        ...state
      };
  }
};

export default employeeReducer;
