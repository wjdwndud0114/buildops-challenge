import React from "react";
import { Grid } from "@material-ui/core";
import EmployeeTable from "./EmployeeTable/EmployeeTable";
import SkillTable from "./SkillTable/SkillTable";

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <EmployeeTable />
      </Grid>
      <Grid item xs={12}>
        <SkillTable />
      </Grid>
    </Grid>
  );
}
