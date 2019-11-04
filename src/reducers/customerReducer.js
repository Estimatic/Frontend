import { GET_COMPANY_CUSTOMERS, CREATE_CUSTOMER } from "../actions/customers";

const initialState = {
  shouldFetchCustomers: true,
  customers: []
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
        shouldFetchCustomers: false
      };

    case CREATE_CUSTOMER:
      return {
        ...state,
        shouldFetchCustomers: true
      };

    default:
      return {
        ...state
      };
  }
};

export default customerReducer;
