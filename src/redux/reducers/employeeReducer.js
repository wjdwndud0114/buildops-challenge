import {
  LOAD_EMPLOYEES,
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPOLYEE
} from "../actions/employeeAction";

export const employees = (state = [], action) => {
  switch (action.type) {
    case LOAD_EMPLOYEES: {
      return action.employees;
    }
    case CREATE_EMPLOYEE: {
      return [...state, action.employee];
    }
    case UPDATE_EMPLOYEE: {
      const index = state.findIndex(v => v.id === action.employee.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
        action.employee
      ];
    }
    case DELETE_EMPOLYEE: {
      const index = state.findIndex(v => v.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
      return state;
  }
};
