import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import { EMPLOYEE_LOADING } from "./employeeAction";

export const createEmployeeSkill = ({ employeeId, skillId }) => dispatch => {
  dispatch({ type: EMPLOYEE_LOADING });
  return API.graphql(
    graphqlOperation(mutations.createEmployeeSkill, {
      input: { employeeId, skillId }
    })
  )
    .then(result => console.log("finished async createEmployeeSkill"))
    .catch(e => console.error(e));
};

export const deleteEmployeeSkill = id => dispatch => {
  dispatch({ type: EMPLOYEE_LOADING });
  return API.graphql(
    graphqlOperation(mutations.deleteEmployeeSkill, {
      input: { id }
    })
  )
    .then(result => console.log("finished async deleteEmployeeSkill"))
    .catch(e => console.error(e));
};
