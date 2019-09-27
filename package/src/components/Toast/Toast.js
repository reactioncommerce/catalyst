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
  const { message, variant, title, ...otherProps } = props;
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

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
        onClose={handleClose}
      />
    </Snackbar>
  );
});


Toast.propTypes = {
  /**
   * Message: Node
   */
  message: PropTypes.node,
  /**
   * Title: Optional
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
