import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import EmployeeDetail from "./EmployeeDetail/EmployeeDetail";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../../graphql/customQueries";
import * as mutations from "../../../graphql/mutations";

export default function EmployeeTable() {
  const [employeeData, setEmployeeData] = useState([]);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [currentDetail, setCurrentDetail] = useState(null);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      const result = await API.graphql(
        graphqlOperation(queries.listEmployeesFull)
      );
      setEmployeeData(result.data.listEmployees.items);
      console.log(result);
    };

    fetchEmployeeData();
  }, []);

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
            render: a => a.addresses.items.length,
            customFilterAndSearch: (term, rowData) =>
              rowData.addresses.items.some(a =>
                Object.values(a).some(v =>
                  v.toLowerCase().includes(term.toLowerCase())
                )
              )
          },
          {
            title: "Skills",
            field: "skills",
            editable: "never",
            render: s => s.skills.items.map(s => s.skill.name).join(", "),
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
          onRowAdd: newData => console.log(newData),
          onRowUpdate: (newData, oldData) => console.log(newData, oldData),
          onRowDelete: oldData => console.log(oldData)
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
