import { CHANGE_CUR_TAB, LOADED_COLORS } from "../actions/ui";

const initialState = {
  curTab: "Dashboard",
  colors: {
    main_color: null,
    secondary_color: null,
    side_bar_color: null
  }
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CUR_TAB:
      return {
        ...state,
        curTab: action.payload
      };

    case LOADED_COLORS:
      return {
        ...state,
        colors: { ...action.payload }
      };

    default:
      return {
        ...state
      };
  }
};

export default uiReducer;
