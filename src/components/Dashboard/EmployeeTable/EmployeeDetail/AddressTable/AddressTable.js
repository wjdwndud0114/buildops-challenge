import React from "react";
import MaterialTable from "material-table";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../../../../graphql/mutations";

export default function AddressTable({ employeeId, data }) {
  return (
    <MaterialTable
      title="Addresses"
      data={data}
      columns={[
        { title: "Line1", field: "line1" },
        { title: "Line2", field: "line2" },
        { title: "City", field: "city" },
        { title: "State", field: "state" },
        { title: "Zipcode", field: "zipcode" }
      ]}
      editable={{
        onRowAdd: ({ line1, line2, city, state, zipcode }) =>
          API.graphql(
            graphqlOperation(mutations.createAddress, {
              input: { employeeId, line1, line2, city, state, zipcode }
            })
          ),
        onRowUpdate: ({ id, line1, line2, city, state, zipcode }, oldData) =>
          API.graphql(
            graphqlOperation(mutations.updateAddress, {
              input: { employeeId, id, line1, line2, city, state, zipcode }
            })
          ),
        onRowDelete: ({ id }) =>
          API.graphql(
            graphqlOperation(mutations.deleteAddress, {
              input: { id }
            })
          )
      }}
    />
  );
}
