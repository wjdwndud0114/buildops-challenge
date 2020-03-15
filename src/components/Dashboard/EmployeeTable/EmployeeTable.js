import React, { useState } from "react";
import MaterialTable from "material-table";
import EmployeeDetail from "./EmployeeDetail/EmployeeDetail";

export default function EmployeeTable() {
  const testData = [
    {
      id: "18247",
      firstname: "Kevin",
      lastname: "Jeong",
      addresses: [
        {
          line1: "2255 Montrose Avenue",
          line2: "Apt 15",
          city: "Montrose",
          state: "CA",
          zipcode: "91020"
        }
      ],
      skills: [
        { id: "34343", name: "Angular" },
        { id: "23452", name: "React" }
      ]
    },
    {
      id: "18245",
      firstname: "Kevin",
      lastname: "Jeong",
      addresses: [],
      skills: [{ id: "23452", name: "React" }]
    },
    {
      id: "18244",
      firstname: "Kevin",
      lastname: "Jeong",
      addresses: [],
      skills: [{ id: "23452", name: "React" }]
    },
    {
      id: "18243",
      firstname: "Kevin",
      lastname: "Jeong",
      addresses: [],
      skills: [{ id: "23452", name: "React" }]
    }
  ];
  const [employeeData, setEmployeeData] = useState(testData);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [currentDetail, setCurrentDetail] = useState(null);

  const handleDetailDialogOpen = rowData => {
    setCurrentDetail(rowData);
    setDetailDialogOpen(true);
  };

  const handleDetailDialogClose = () => {
    setDetailDialogOpen(false);
  };

  return (
    <React.Fragment>
      <MaterialTable
        title="Employees"
        data={employeeData}
        columns={[
          { title: "First Name", field: "firstname" },
          { title: "Last Name", field: "lastname" },
          {
            title: "Addresses",
            field: "addresses",
            editable: "never",
            render: a => a.addresses.length,
            customFilterAndSearch: (term, rowData) =>
              rowData.addresses.some(a =>
                Object.values(a).some(v =>
                  v.toLowerCase().includes(term.toLowerCase())
                )
              )
          },
          {
            title: "Skills",
            field: "skills",
            editable: "never",
            render: s => s.skills.map(s => s.name).join(", "),
            customFilterAndSearch: (term, rowData) =>
              rowData.skills.some(s =>
                s.name.toLowerCase().includes(term.toLowerCase())
              )
          }
        ]}
        actions={[
          {
            icon: "info",
            tooltip: "View Details",
            onClick: (event, rowData) => handleDetailDialogOpen(rowData)
          }
        ]}
        editable={{
          onRowAdd: newData => null,
          onRowUpdate: (newData, oldData) => null,
          onRowDelete: oldData => null
        }}
      />
      <EmployeeDetail
        open={detailDialogOpen}
        handleClose={handleDetailDialogClose}
        data={currentDetail}
      />
    </React.Fragment>
  );
}
