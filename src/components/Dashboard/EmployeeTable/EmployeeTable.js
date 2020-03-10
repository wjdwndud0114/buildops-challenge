import React from "react";
import MaterialTable from "material-table";
import EmployeeDetail from "./EmployeeDetail";

export default function EmployeeTable() {
  return (
    <MaterialTable
      columns={[
        { title: "First Name", field: "firstname" },
        { title: "Last Name", field: "lastname" }
      ]}
      data={[
        { firstname: "Kevin", lastname: "Jeong" },
        { firstname: "Kevin", lastname: "Jeong" },
        { firstname: "Kevin", lastname: "Jeong" },
        { firstname: "Kevin", lastname: "Jeong" },
        { firstname: "Kevin", lastname: "Jeong" },
        { firstname: "Kevin", lastname: "Jeong" },
        { firstname: "Kevin", lastname: "Jeong" },
        { firstname: "Kevin", lastname: "Jeong" },
        { firstname: "Kevin", lastname: "Jeong" },
        { firstname: "Kevin", lastname: "Jeong" },
        { firstname: "Kevin", lastname: "Jeong" },
        { firstname: "Kevin", lastname: "Jeong" }
      ]}
      title="Employees"
      detailPanel={EmployeeDetail}
      editable={{
        onRowAdd: newData => null,
        onRowUpdate: (newData, oldData) => null,
        onRowDelete: oldData => null
      }}
    />
  );
}
