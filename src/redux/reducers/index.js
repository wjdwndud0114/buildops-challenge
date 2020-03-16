import { combineReducers } from "redux";
import { employees } from "./employeeReducer";
import { skills } from "./skillReducer";

export default combineReducers({
  employees,
  skills
});
