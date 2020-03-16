import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/customQueries";
import * as mutations from "../../graphql/mutations";

export const LOAD_EMPLOYEES = "LOAD_EMPLOYEES";
export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE";
export const DELETE_EMPOLYEE = "DELETE_EMPOLYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";

export const loadEmployees = () => dispatch =>
  API.graphql(graphqlOperation(queries.listEmployeesFull)).then(result =>
    dispatch(onLoadEmployees(result.data.listEmployees.items))
  );

export const onLoadEmployees = employees => ({
  type: LOAD_EMPLOYEES,
  employees
});

export const createEmployee = ({ firstname, lastname }) => dispatch =>
  API.graphql(
    graphqlOperation(mutations.createEmployee, {
      input: { firstname, lastname }
    })
  )
    .then(employee => console.log("finished async createEmployee"))
    .catch(e => console.error(e));

export const onCreateEmployee = employee => ({
  type: CREATE_EMPLOYEE,
  employee
});

export const updateEmployee = ({ id, firstname, lastname }) => dispatch =>
  API.graphql(
    graphqlOperation(mutations.updateEmployee, {
      input: { id, firstname, lastname }
    })
  )
    .then(employee => console.log("finished async updateEmployee"))
    .catch(e => console.error(e));

export const onUpdateEmployee = employee => ({
  type: UPDATE_EMPLOYEE,
  employee
});

export const deleteEmployee = id => dispatch =>
  API.graphql(
    graphqlOperation(mutations.deleteEmployee, {
      input: { id }
    })
  )
    .then(employee => console.log("finished async deleteEmployee"))
    .catch(e => console.error(e));

export const onDeleteEmployee = ({ id }) => ({ type: DELETE_EMPOLYEE, id });
