import {
  LOAD_EMPLOYEES,
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPOLYEE,
  LOADING
} from "../actions/employeeAction";

export const employees = (
  state = { tableLoading: false, data: [] },
  action
) => {
  let newData = [];
  switch (action.type) {
    case LOADING: {
      return { tableLoading: true, data: state.data };
    }
    case LOAD_EMPLOYEES: {
      newData = action.employees;
      break;
    }
    case CREATE_EMPLOYEE: {
      newData = [...state.data, action.employee];
      break;
    }
    case UPDATE_EMPLOYEE: {
      const index = state.data.findIndex(v => v.id === action.employee.id);
      newData = [
        ...state.data.slice(0, index),
        ...state.data.slice(index + 1),
        action.employee
      ];
      break;
    }
    case DELETE_EMPOLYEE: {
      const index = state.data.findIndex(v => v.id === action.id);
      newData = [...state.data.slice(0, index), ...state.data.slice(index + 1)];
      break;
    }
    default:
      return state;
  }

  return { tableLoading: false, data: newData };
};
