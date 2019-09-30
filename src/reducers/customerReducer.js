import { GET_COMPANY_CUSTOMERS } from "../actions/customers";

const initialState = {
  customers: []
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_CUSTOMERS:
      return {
        ...state,
        customers: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default customerReducer;
