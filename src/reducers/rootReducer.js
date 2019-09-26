import { combineReducers } from "redux";
import authReducer from "./authReducer";
import uiReducer from "./uiReducer";
import employeeReducer from "./employeesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  employees: employeeReducer
});

export default rootReducer;
