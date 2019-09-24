import React from "react";
import PropTypes from "prop-types";
import { SnackbarContent } from "@material-ui/core";

/**
 * @name ToastWrapper
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
export default function ToastWrapper(props) {
  const { message, ...otherProps } = props;

  return (
    <SnackbarContent
      message={message}
      {...otherProps}
    >
      <div>{message}</div>
    </SnackbarContent>
  );
}

ToastWrapper.propTypes = {
  message: PropTypes.object
};
