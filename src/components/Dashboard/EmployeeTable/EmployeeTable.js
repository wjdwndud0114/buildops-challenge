import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import EmployeeDetail from "./EmployeeDetail/EmployeeDetail";
import * as subscriptions from "../../../graphql/subscriptions";
import * as employeeActions from "../../../redux/actions/employeeAction";
import { useSubscribeCUD } from "../../../hooks/subscribeCUD";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function EmployeeTable({ employeeData, loading, actions }) {
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [currentDetail, setCurrentDetail] = useState(null);
  const subscribe = useSubscribeCUD;

  useEffect(() => {
    if (currentDetail != null)
      setCurrentDetail(employeeData.find(e => e.id === currentDetail.id));
  }, [currentDetail, employeeData]);

  useEffect(() => {
    actions.loadEmployees();

    const subscriptionList = subscribe({
      createSub: subscriptions.onCreateEmployee,
      updateSub: subscriptions.onUpdateEmployee,
      deleteSub: subscriptions.onDeleteEmployee,
      createCallback: d => actions.onCreateEmployee(d.onCreateEmployee),
      updateCallback: d => actions.onUpdateEmployee(d.onUpdateEmployee),
      deleteCallback: d => actions.onDeleteEmployee(d.onDeleteEmployee.id)
    });

    return () => subscriptionList.forEach(s => s.unsubscribe());
  }, [actions, subscribe]);

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
        data={employeeData.map(o => ({ ...o }))} // https://github.com/mbrn/material-table/issues/666
        isLoading={loading}
        columns={[
          { title: "First Name", field: "firstname" },
          { title: "Last Name", field: "lastname", defaultSort: "asc" },
          {
            title: "Addresses",
            field: "addresses",
            editable: "never",
            render: a => (a ? a.addresses.items.length : null),
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
            render: e =>
              e ? e.skills.items.map(s => s.skill.name).join(", ") : null,
            customFilterAndSearch: (term, rowData) =>
              rowData.skills.items.some(s =>
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
          onRowAdd: ({ firstname, lastname }) =>
            actions.createEmployee({ firstname, lastname }),
          onRowUpdate: ({ id, firstname, lastname }, oldData) =>
            actions.updateEmployee({ id, firstname, lastname }),
          onRowDelete: emp => actions.deleteEmployee(emp)
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

const mapStateToProps = state => ({
  employeeData: state.employees.data,
  loading: state.employees.tableLoading
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(employeeActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTable);
