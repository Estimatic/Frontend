import {
  GET_COMPANY_CATEGORIES,
  CREATE_CATEGORY,
  CREATE_MATERIAL
} from "../actions/categories";

const initialState = {
  categories: [],
  shouldFetchCategories: true
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        shouldFetchCategories: false
      };

    case CREATE_MATERIAL:
      return {
        ...state,
        shouldFetchCategories: true
      };

    case CREATE_CATEGORY:
      return {
        ...state,
        shouldFetchCategories: true
      };

    default:
      return {
        ...state
      };
  }
};

export default categoryReducer;
