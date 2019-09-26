import React from "react";
import PropTypes from "prop-types";
import { Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "mdi-material-ui/Close";
import { makeStyles } from "@material-ui/core/styles";
import { ToastWrapper } from "./helpers";

const useStyles = makeStyles((theme) => ({
  close: {
    padding: 4,
    marginRight: -8
  }
}));

/**
 * @name Toast
 * @param {Object} props Component props
 * @returns {React.Component} returns a React component
 */
const Toast = React.forwardRef(function Toast(props, ref) {
  const classes = useStyles();
  const { className, message, variant, title, ...otherProps } = props;
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
        action={
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>}
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
