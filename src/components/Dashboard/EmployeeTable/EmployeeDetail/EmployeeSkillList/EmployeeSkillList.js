import React, { useState } from "react";
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
  const testData = [
    { id: "23452", name: "React" },
    { id: "34343", name: "Angular" }
  ];

  const theme = useTheme();
  const classes = useStyles(theme);
  const [selectedSkills, setSelectedSkills] = useState(data);
  const [skillSet, setSkillSet] = useState(testData);
  const handleChange = e => {
    setSelectedSkills(e.target.value);
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
                  label={skillSet.find(s => s.id === skillId).name}
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
