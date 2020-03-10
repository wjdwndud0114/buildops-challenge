import React from "react";
import { IconButton, makeStyles, useTheme } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  menuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function DrawerButton(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <IconButton
      color="inherit"
      aria-label={(props.drawerOpen ? "Close" : "Open") + " drawer"}
      onClick={props.drawerOpen ? props.closeDrawer : props.openDrawer}
      edge="start"
      className={classes.menuButton}
    >
      {props.drawerOpen ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  );
}
