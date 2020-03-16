import React, { useEffect } from "react";
import MaterialTable from "material-table";
import * as subscriptions from "../../../../../graphql/subscriptions";
import * as addressActions from "../../../../../redux/actions/addressAction";
import * as employeeActions from "../../../../../redux/actions/employeeAction";
import { useSubscribeCUD } from "../../../../../hooks/subscribeCUD";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function AddressTable({ employeeId, data, loading, actions, eActions }) {
  const subscribe = useSubscribeCUD;

  useEffect(() => {
    const subscriptionList = subscribe({
      createSub: subscriptions.onCreateAddress,
      updateSub: subscriptions.onUpdateAddress,
      deleteSub: subscriptions.onDeleteAddress,
      createCallback: d => eActions.loadEmployee(employeeId),
      updateCallback: d => eActions.loadEmployee(employeeId),
      deleteCallback: d => eActions.loadEmployee(employeeId)
    });

    return () => subscriptionList.forEach(s => s.unsubscribe());
  }, [actions, eActions, employeeId, subscribe]);

  return (
    <MaterialTable
      title="Addresses"
      data={data.map(o => ({ ...o }))}
      isLoading={loading}
      columns={[
        { title: "Line1", field: "line1" },
        { title: "Line2", field: "line2" },
        { title: "City", field: "city" },
        { title: "State", field: "state" },
        { title: "Zipcode", field: "zipcode" }
      ]}
      editable={{
        onRowAdd: ({ line1, line2, city, state, zipcode }) =>
          actions.createAddress({
            line1,
            line2: line2 === "" ? null : line2,
            city,
            state,
            zipcode,
            employeeId
          }),
        onRowUpdate: ({ id, line1, line2, city, state, zipcode }, oldData) =>
          actions.updateAddress({
            id,
            line1,
            line2: line2 === "" ? null : line2,
            city,
            state,
            zipcode,
            employeeId
          }),
        onRowDelete: ({ id }) => actions.deleteAddress(id)
      }}
    />
  );
}

const mapStateToProps = state => ({
  loading: state.employees.tableLoading
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(addressActions, dispatch),
  eActions: bindActionCreators(employeeActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressTable);
