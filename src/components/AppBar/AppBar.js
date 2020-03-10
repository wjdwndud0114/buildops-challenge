import React from "react";
import logo from "../../logo.svg";
import {
  Container,
  AppBar as MuiAppBar,
  Typography,
  makeStyles,
  useTheme,
  Toolbar
} from "@material-ui/core";
import DrawerButton from "./DrawerButton/DrawerButton";

const useStyles = makeStyles(theme => ({
  appBarContainer: {
    padding: 0
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  hide: {
    display: "none"
  }
}));

export default function AppBar(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <MuiAppBar position="fixed" className={classes.appBar}>
      <Container className={classes.appBarContainer}>
        <Toolbar>
          <DrawerButton
            drawerOpen={props.drawerOpen}
            closeDrawer={props.closeDrawer}
            openDrawer={props.openDrawer}
          />
          <img src={logo} alt="logo" width="50" />
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
