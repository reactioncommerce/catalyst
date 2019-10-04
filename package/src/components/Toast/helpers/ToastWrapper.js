import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Paper, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "mdi-material-ui/Close";

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
    marginLeft: "auto",
    height: "100%"
  },
  messageWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  title: {
    padding: theme.spacing(0.5, 0, 1, 0),
    fontWeight: theme.typography.fontWeightSemiBold
  },
  action: {
    marginLeft: "auto"
  },
  success: {
    fontSize: theme.typography.fontSize,
    backgroundColor: theme.palette.colors.forestGreenBackground,
    color: theme.palette.colors.forestGreen600,
    border: `${theme.spacing(0.25)}px solid ${theme.palette.colors.forestGreenBorder}`,
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    minWidth: 288,
    display: "flex"
  },
  error: {
    fontSize: theme.typography.fontSize,
    backgroundColor: theme.palette.colors.redBackground,
    color: theme.palette.colors.red600,
    border: `${theme.spacing(0.25)}px solid ${theme.palette.colors.redBorder}`,
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    minWidth: 288,
    display: "flex"
  },
  info: {
    fontSize: theme.typography.fontSize,
    backgroundColor: theme.palette.colors.reactionBlueBackground,
    color: theme.palette.colors.reactionBlue600,
    border: `${theme.spacing(0.25)}px solid ${theme.palette.colors.reactionBlueBorder}`,
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    minWidth: 288,
    display: "flex"
  },
  warning: {
    fontSize: theme.typography.fontSize,
    backgroundColor: theme.palette.colors.yellowBackground,
    color: theme.palette.colors.yellow600,
    border: `${theme.spacing(0.25)}px solid ${theme.palette.colors.yellowBorder}`,
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    minWidth: 288,
    display: "flex"
  }
}));

/**
 * @name ToastWrapper
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
export default function ToastWrapper(props) {
  const { className, message, variant, title, onClose, ...otherProps } = props;
  const classes = useStyles();

  return (
    <Paper
      component={"div"}
      role="alertdialog"
      square
      elevation={6}
      className={clsx(classes[variant], className)}
      aria-describedby="message-id"
      {...otherProps}
    >
      <div className={classes.messageWrapper}>
        { title ? <Typography variant="h4" component="div" className={classes.title}>{title}</Typography> : null }
        {message}
      </div>
      <IconButton
        key="close"
        aria-label="close"
        className={classes.close}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
    </Paper>
  );
}

ToastWrapper.propTypes = {
  action: PropTypes.node,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  title: PropTypes.string,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};
