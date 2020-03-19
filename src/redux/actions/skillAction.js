import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/customQueries";
import * as mutations from "../../graphql/mutations";
import {
  EMPLOYEE_LOADING,
  loadEmployee,
  loadEmployees
} from "./employeeAction";

export const SKILL_LOADING = "SKILL_LOADING";
export const LOAD_SKILL = "LOAD_SKILL";
export const LOAD_SKILLS = "LOAD_SKILLS";
export const CREATE_SKILL = "CREATE_SKILL";
export const DELETE_SKILL = "DELETE_SKILL";
export const UPDATE_SKILL = "UPDATE_SKILL";

export const loadSkill = ({ skillId, employeeId }) => dispatch => {
  dispatch({ type: SKILL_LOADING });
  dispatch({ type: EMPLOYEE_LOADING });
  dispatch(loadEmployee(employeeId));
  return API.graphql(
    graphqlOperation(queries.getSkillForTable, { id: skillId })
  )
    .then(result => dispatch(onUpdateSkill(result.data.getSkill)))
    .catch(e => console.error(e));
};

export const loadSkills = () => dispatch => {
  dispatch({ type: SKILL_LOADING });
  return API.graphql(graphqlOperation(queries.listSkillsForTable))
    .then(result => dispatch(onLoadSkills(result.data.listSkills.items)))
    .catch(e => console.error(e));
};

export const onLoadSkills = skills => ({
  type: LOAD_SKILLS,
  skills
});

export const createSkill = ({ name }) => dispatch => {
  dispatch({ type: SKILL_LOADING });
  return API.graphql(
    graphqlOperation(mutations.createSkill, {
      input: { name }
    })
  )
    .then(result => console.log("finished async createSkill"))
    .catch(e => console.error(e));
};

export const onCreateSkill = skill => ({
  type: CREATE_SKILL,
  skill
});

export const updateSkill = ({ id, name }) => dispatch => {
  dispatch({ type: SKILL_LOADING });
  return API.graphql(
    graphqlOperation(mutations.updateSkill, {
      input: { id, name }
    })
  )
    .then(result => {
      console.log("finished async updateSkill");
      dispatch(loadEmployees());
    })
    .catch(e => console.error(e));
};

export const onUpdateSkill = skill => ({
  type: UPDATE_SKILL,
  skill
});

export const deleteSkill = skill => dispatch => {
  dispatch({ type: SKILL_LOADING });
  return API.graphql(
    graphqlOperation(mutations.deleteSkill, {
      input: { id: skill.id }
    })
  )
    .then(result => {
      console.log("finished async deleteSkill");
      dispatch(loadEmployees());
    })
    .catch(e => console.error(e));
};

export const onDeleteSkill = id => ({ type: DELETE_SKILL, id });
