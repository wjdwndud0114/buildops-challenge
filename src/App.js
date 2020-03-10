import React, { useEffect } from "react";
import { Container, makeStyles, useTheme, useMediaQuery } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import MenuDrawer from "./components/MenuDrawer/MenuDrawer";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  mainContainer: {
    display: "flex",
    height: "100%",
    padding: 0
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function App() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const drawerShouldOpen = useMediaQuery(theme.breakpoints.up("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(drawerShouldOpen);
  const [userOverride, setUserOverride] = React.useState(false);

  useEffect(() => {
    if (drawerOpen) {
      if (drawerShouldOpen) setUserOverride(false);
      else if (!userOverride) setDrawerOpen(false);
    } else if (drawerShouldOpen) setDrawerOpen(true);
  }, [drawerOpen, drawerShouldOpen, userOverride]);

  const openDrawer = () => {
    setUserOverride(true);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <Container className={classes.mainContainer}>
          <AppBar drawerOpen={drawerOpen} closeDrawer={closeDrawer} openDrawer={openDrawer} />
          <MenuDrawer drawerOpen={drawerOpen} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Redirect exact from="/" to="/dashboard" />
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </main>
        </Container>
      </div>
    </Router>
  );
}
