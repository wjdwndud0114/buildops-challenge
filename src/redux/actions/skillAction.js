import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/customQueries";
import * as mutations from "../../graphql/mutations";

export const LOADING = "LOADING";
export const LOAD_SKILLS = "LOAD_SKILLS";
export const CREATE_SKILL = "CREATE_SKILL";
export const DELETE_SKILL = "DELETE_SKILL";
export const UPDATE_SKILL = "UPDATE_SKILL";

export const loadSkills = () => dispatch => {
  dispatch({ type: LOADING });
  return API.graphql(
    graphqlOperation(queries.listSkillsForTable)
  ).then(result => dispatch(onLoadSkills(result.data.listSkills.items)));
};

export const onLoadSkills = employees => ({
  type: LOAD_SKILLS,
  employees
});

export const createSkill = ({ name }) => dispatch => {
  dispatch({ type: LOADING });
  return API.graphql(
    graphqlOperation(mutations.createSkill, {
      input: { name }
    })
  )
    .then(result => console.log("finished async createSkill"))
    .catch(e => console.error(e));
};

export const onCreateSkill = employee => ({
  type: CREATE_SKILL,
  employee
});

export const updateSkill = ({ id, name }) => dispatch => {
  dispatch({ type: LOADING });
  return API.graphql(
    graphqlOperation(mutations.updateSkill, {
      input: { id, name }
    })
  )
    .then(result => console.log("finished async updateSkill"))
    .catch(e => console.error(e));
};

export const onUpdateSkill = employee => ({
  type: UPDATE_SKILL,
  employee
});

export const deleteSkill = id => dispatch => {
  dispatch({ type: LOADING });
  return API.graphql(
    graphqlOperation(mutations.deleteSkill, {
      input: { id }
    })
  )
    .then(result => console.log("finished async deleteSkill"))
    .catch(e => console.error(e));
};

export const onDeleteSkill = ({ id }) => ({ type: DELETE_SKILL, id });
