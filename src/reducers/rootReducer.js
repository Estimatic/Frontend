import { combineReducers } from "redux";
import authReducer from "./authReducer";
import uiReducer from "./uiReducer";
import employeeReducer from "./employeesReducer";
import customerReducer from "./customerReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  employees: employeeReducer,
  customers: customerReducer,
  categories: categoryReducer
});

export default rootReducer;
