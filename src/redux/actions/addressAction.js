import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import { EMPLOYEE_LOADING } from "./employeeAction";

export const createAddress = ({
  line1,
  line2,
  city,
  state,
  zipcode,
  employeeId
}) => dispatch => {
  dispatch({ type: EMPLOYEE_LOADING });
  return API.graphql(
    graphqlOperation(mutations.createAddress, {
      input: { employeeId, line1, line2, city, state, zipcode }
    })
  )
    .then(result => console.log("finished async createAddress"))
    .catch(e => console.error(e));
};

export const updateAddress = ({
  id,
  line1,
  line2,
  city,
  state,
  zipcode,
  employeeId
}) => dispatch => {
  dispatch({ type: EMPLOYEE_LOADING });
  return API.graphql(
    graphqlOperation(mutations.updateAddress, {
      input: { id, employeeId, line1, line2, city, state, zipcode }
    })
  )
    .then(result => console.log("finished async updateAddress"))
    .catch(e => console.error(e));
};

export const deleteAddress = id => dispatch => {
  dispatch({ type: EMPLOYEE_LOADING });
  return API.graphql(
    graphqlOperation(mutations.deleteAddress, {
      input: { id }
    })
  )
    .then(result => console.log("finished async deleteAddress"))
    .catch(e => console.error(e));
};
