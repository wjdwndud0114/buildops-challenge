import {
  LOAD_SKILLS,
  CREATE_SKILL,
  UPDATE_SKILL,
  DELETE_SKILL,
  LOADING
} from "../actions/skillAction";

export const skills = (state = { tableLoading: false, data: [] }, action) => {
  let newData = [];
  switch (action.type) {
    case LOADING: {
      return { tableLoading: true, data: state.data };
    }
    case LOAD_SKILLS: {
      newData = action.employees;
      break;
    }
    case CREATE_SKILL: {
      newData = [...state.data, action.employee];
      break;
    }
    case UPDATE_SKILL: {
      const index = state.data.findIndex(v => v.id === action.employee.id);
      newData = [
        ...state.data.slice(0, index),
        ...state.data.slice(index + 1),
        action.employee
      ];
      break;
    }
    case DELETE_SKILL: {
      const index = state.data.findIndex(v => v.id === action.id);
      newData = [...state.data.slice(0, index), ...state.data.slice(index + 1)];
      break;
    }
    default:
      return state;
  }

  return { tableLoading: false, data: newData };
};
