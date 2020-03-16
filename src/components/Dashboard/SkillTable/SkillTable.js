import React, { useEffect } from "react";
import MaterialTable from "material-table";
import * as subscriptions from "../../../graphql/subscriptions";
import * as skillActions from "../../../redux/actions/skillAction";
import { useSubscribeCUD } from "../../../hooks/subscribeCUD";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function SkillTable({ skillData, loading, actions }) {
  const subscribe = useSubscribeCUD;

  useEffect(() => {
    actions.loadSkills();

    const subscriptionList = subscribe({
      createSub: subscriptions.onCreateSkill,
      updateSub: subscriptions.onUpdateSkill,
      deleteSub: subscriptions.onDeleteSkill,
      createCallback: d => actions.onCreateSkill(d.onCreateSkill),
      updateCallback: d => actions.onUpdateSkill(d.onUpdateSkill),
      deleteCallback: d => actions.onDeleteSkill(d.onDeleteSkill.id)
    });

    return () => subscriptionList.forEach(s => s.unsubscribe());
  }, [actions, subscribe]);

  return (
    <MaterialTable
      title="Skills"
      data={skillData.map(o => ({ ...o }))}
      isLoading={loading}
      columns={[
        { title: "Skill Name", field: "name", defaultSort: "asc" },
        {
          title: "Employees with Skill",
          field: "employees",
          editable: "never",
          render: s => (s ? s.employees.items.length : null)
        }
      ]}
      editable={{
        onRowAdd: ({ name }) => actions.createSkill({ name }),
        onRowUpdate: ({ id, name }, oldData) =>
          actions.updateSkill({ id, name }),
        onRowDelete: ({ id }) => actions.deleteSkill(id)
      }}
    />
  );
}

const mapStateToProps = state => ({
  skillData: state.skills.data,
  loading: state.skills.tableLoading
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(skillActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillTable);
