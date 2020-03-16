import React, { useEffect } from "react";
import {
  FormControl,
  Input,
  Select,
  makeStyles,
  MenuItem,
  Paper,
  Chip,
  Typography,
  useTheme
} from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useSubscribeCUD } from "../../../../../hooks/subscribeCUD";
import * as subscriptions from "../../../../../graphql/subscriptions";
import * as skillActions from "../../../../../redux/actions/skillAction";
import * as employeeSkillActions from "../../../../../redux/actions/employeeSkillAction";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: "95%"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  label: {
    paddingLeft: theme.spacing(3),
    ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center"
  }
}));

function EmployeeSkillList({
  employeeId,
  data,
  loading,
  actions,
  sActions,
  skillData
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const subscribe = useSubscribeCUD;

  useEffect(() => {
    const subscriptionList = subscribe({
      createSub: subscriptions.onCreateEmployeeSkill,
      updateSub: subscriptions.onUpdateEmployeeSkill,
      deleteSub: subscriptions.onDeleteEmployeeSkill,
      createCallback: d => sActions.loadSkill(d.onCreateEmployeeSkill),
      updateCallback: d => sActions.loadSkill(d.onUpdateEmployeeSkill),
      deleteCallback: d => sActions.loadSkill(d.onDeleteEmployeeSkill)
    });

    return () => subscriptionList.forEach(s => s.unsubscribe());
  }, [actions, sActions, employeeId, subscribe]);

  const handleChange = e => {
    const skillIds = e.target.value;
    const addedSkill =
      skillIds && data
        ? skillIds.filter(s => !data.includes(s))
        : skillIds && !data
        ? skillIds
        : [];
    if (addedSkill.length > 0) {
      actions.createEmployeeSkill({ employeeId, skillId: addedSkill[0] });
      return;
    }
    const removedSkill =
      skillIds && data ? data.filter(s => !skillIds.includes(s)) : data;

    const id = skillData
      .find(s => s.id === removedSkill[0])
      .employees.items.find(e => e.employee.id === employeeId).id;
    actions.deleteEmployeeSkill(id);
  };

  return (
    <Paper>
      <Typography className={classes.label} variant="h6">
        Skills
      </Typography>
      <FormControl className={classes.formControl}>
        <Select
          multiple
          value={data}
          onChange={handleChange}
          input={<Input />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(skillId => (
                <Chip
                  key={skillId}
                  label={
                    skillData.length > 0
                      ? skillData.find(s => s.id === skillId).name
                      : null
                  }
                  className={classes.chip}
                />
              ))}
            </div>
          )}
        >
          {skillData.map(s => (
            <MenuItem disabled={loading} key={s.id} value={s.id}>
              {s.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
}

const mapStateToProps = state => ({
  skillData: state.skills.data,
  loading: state.employees.tableLoading
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(employeeSkillActions, dispatch),
  sActions: bindActionCreators(skillActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeSkillList);
