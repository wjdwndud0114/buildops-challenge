import React, { useEffect, useState } from "react";
import {
  Container,
  makeStyles,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";
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
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    display: "flex",
    padding: theme.spacing(3),
    overflow: "auto"
  }
}));

export default function App() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const drawerShouldOpen = useMediaQuery(theme.breakpoints.up("md"));
  const [drawerOpen, setDrawerOpen] = useState(drawerShouldOpen);
  const [userOverride, setUserOverride] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      if (drawerShouldOpen) setUserOverride(false);
      else if (!userOverride) setDrawerOpen(false);
    } else if (drawerShouldOpen) setDrawerOpen(true);
  }, [drawerShouldOpen, drawerOpen, userOverride]);

  const handleDrawerOpen = () => {
    setUserOverride(true);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <Container className={classes.mainContainer}>
          <AppBar
            drawerOpen={drawerOpen}
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
          />
          <MenuDrawer drawerOpen={drawerOpen} />
          <div className={classes.contentContainer}>
            <div className={classes.toolbar} />
            <main className={classes.content}>
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
          </div>
        </Container>
      </div>
    </Router>
  );
}
