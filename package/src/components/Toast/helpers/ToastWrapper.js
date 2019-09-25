import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { SnackbarContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  success: {
    fontSize: theme.typography.fontSize,
    backgroundColor: theme.palette.colors.forestGreenBackground,
    color: theme.palette.colors.black,
    border: `2px solid ${theme.palette.colors.forestGreenBorder}`
  },
  error: {
    fontSize: theme.typography.fontSize,
    backgroundColor: theme.palette.colors.redBackground,
    color: theme.palette.colors.black,
    border: `2px solid ${theme.palette.colors.redBorder}`
  },
  info: {
    fontSize: theme.typography.fontSize,
    backgroundColor: theme.palette.colors.reactionBlueBackground,
    color: theme.palette.colors.black,
    border: `2px solid ${theme.palette.colors.reactionBlueBorder}`
  },
  warning: {
    fontSize: theme.typography.fontSize,
    backgroundColor: theme.palette.colors.yellowBackground,
    color: theme.palette.colors.black,
    border: `2px solid ${theme.palette.colors.yellowBorder}`
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

/**
 * @name ToastWrapper
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
export default function ToastWrapper(props) {
  const { className, message, variant, ...otherProps } = props;
  const classes = useStyles();

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      message={message}
      {...otherProps}
    />
  );
}

ToastWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};
