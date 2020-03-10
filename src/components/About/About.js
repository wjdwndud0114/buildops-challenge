import React from "react";
import { Grid, Paper } from "@material-ui/core";

export default function About() {
  return (
    <Grid container spacing={3}>
      <Grid item xs></Grid>
      <Grid item xs={8}>
        <Paper>Kevin Jeong - jyj022@ucsd.edu</Paper>
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
}
