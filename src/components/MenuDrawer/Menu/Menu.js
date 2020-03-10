import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import InfoIcon from "@material-ui/icons/Info";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

export default (
  <List>
    <ListItem button key="Dashboard" component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button key="About" component={Link} to="/about">
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
  </List>
);
