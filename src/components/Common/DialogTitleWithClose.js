import React from "react";
import {
  IconButton,
  Typography,
  makeStyles,
  useTheme
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

export default function DialogTitleWithClose({ children, onClose }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h4">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="Close Dialog"
          onClick={onClose}
          className={classes.closeButton}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </div>
  );
}
