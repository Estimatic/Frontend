import { combineReducers } from "redux";
import authReducer from "./authReducer";
import uiReducer from "./uiReducer";
import employeeReducer from "./employeesReducer";
import customerReducer from "./customerReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  employees: employeeReducer,
  customers: customerReducer
});

export default rootReducer;
