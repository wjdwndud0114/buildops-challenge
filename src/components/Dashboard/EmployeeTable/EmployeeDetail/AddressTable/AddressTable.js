import React from "react";
import MaterialTable from "material-table";

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
        onRowAdd: newData => null,
        onRowUpdate: (newData, oldData) => null,
        onRowDelete: oldData => null
      }}
    />
  );
}
