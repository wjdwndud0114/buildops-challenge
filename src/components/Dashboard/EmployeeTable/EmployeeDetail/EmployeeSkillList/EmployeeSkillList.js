import React, { useState, useEffect } from "react";
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
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../../../../graphql/queries";
import * as mutations from "../../../../../graphql/mutations";

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

export default function EmployeeSkillList({ employeeId, data }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [selectedSkills, setSelectedSkills] = useState(data);
  const [skillSet, setSkillSet] = useState([]);

  useEffect(() => {
    const fetchSkillData = async () => {
      const result = await API.graphql(graphqlOperation(queries.listSkills));
      setSkillSet(result.data.listSkills.items);
      console.log(result);
    };

    fetchSkillData();
  }, []);

  const handleChange = e => {
    const skillId = e.target.value;
    console.log(skillId);
    // API.graphql(
    //   graphqlOperation(mutations.createEmployeeSkill, {
    //     input: { employeeId, skillId }
    //   })
    // );
    setSelectedSkills(skillId);
  };

  return (
    <Paper>
      <Typography className={classes.label} variant="h6">
        Skills
      </Typography>
      <FormControl className={classes.formControl}>
        <Select
          multiple
          value={selectedSkills}
          onChange={handleChange}
          input={<Input />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(skillId => (
                <Chip
                  key={skillId}
                  label={
                    skillSet.length > 0
                      ? skillSet.find(s => s.id === skillId).name
                      : null
                  }
                  className={classes.chip}
                />
              ))}
            </div>
          )}
        >
          {skillSet.map(s => (
            <MenuItem key={s.id} value={s.id}>
              {s.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
}
