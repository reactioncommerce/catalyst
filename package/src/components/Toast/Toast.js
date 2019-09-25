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
  const { className, message, variant, ...otherProps } = props;
  return (
    <Snackbar
      ref={ref}
      {...otherProps}
    >
      <ToastWrapper
        props={otherProps}
        variant={variant}
        title={props.title}
        message={message}
      />
    </Snackbar>
  );
});


Toast.propTypes = {
  /**
    * You can provide a `className` prop that will be applied to the outermost DOM element
    * rendered by this component. We do not recommend using this for styling purposes, but
    * it can be useful as a selector in some situations.
    */
  className: PropTypes.string,
  /**
   * Message
   */
  message: PropTypes.string,
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
