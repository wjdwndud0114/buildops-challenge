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

export default function DrawerButton({
  drawerOpen,
  handleDrawerClose,
  handleDrawerOpen
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <IconButton
      color="inherit"
      aria-label={(drawerOpen ? "Close" : "Open") + " drawer"}
      onClick={drawerOpen ? handleDrawerClose : handleDrawerOpen}
      edge="start"
      className={classes.menuButton}
    >
      {drawerOpen ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  );
}
