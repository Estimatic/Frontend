import { CHANGE_CUR_TAB } from "../actions/ui";

const initialState = {
  curTab: "Dashboard"
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CUR_TAB:
      return {
        ...state,
        curTab: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default authReducer;
