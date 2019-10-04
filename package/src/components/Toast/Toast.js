import React from "react";
import PropTypes from "prop-types";
import { Snackbar } from "@material-ui/core";
import { ToastWrapper } from "./helpers";

/**
 * @name Toast
 * @param {Object} props Component props
 * @returns {React.Component} returns a React component
 */
const Toast = React.forwardRef(function Toast(props, ref) {
  const { message, variant, title, onClose, ...otherProps } = props;
  const [open] = React.useState(false);

  return (
    <Snackbar
      ref={ref}
      open={open}
      {...otherProps}
    >
      <ToastWrapper
        props={otherProps}
        variant={variant}
        title={title}
        message={message}
        onClose={onClose}
      />
    </Snackbar>
  );
});


Toast.propTypes = {
  /**
   * Message: Node, <span>Message goes here</span>
   */
  message: PropTypes.node,
  /**
   * onClose: Callback fired when the component requests to be closed and when the X icon button is clicked
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Title: Optional string, displayed in bold
   */
  title: PropTypes.string,
  /**
   * Variant: Info, Success, Warning, Error
   */
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};

Toast.defaultProps = {
  variant: "info"
};

export default Toast;
