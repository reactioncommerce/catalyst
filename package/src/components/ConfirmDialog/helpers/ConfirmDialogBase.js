import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "../../DialogTitle";

/**
 * @name ConfirmDialogBase
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
const ConfirmDialogBase = React.forwardRef(function ConfirmDialogBase(props, ref) {
  const {
    cancelActionText,
    children,
    confirmActionText,
    isOpen,
    onClose,
    message,
    onConfirm,
    title,
    ...otherProps
  } = props;

  return (
    <Dialog
      aria-labelledby="confirm-action-dialog-title"
      maxWidth="sm"
      fullWidth={true}
      onClose={onClose}
      open={isOpen}
      ref={ref}
      {...otherProps}
    >
      <DialogTitle id="confirm-action-dialog-title">{title}</DialogTitle>
      {message && (
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
      )}

      {children && (
        <DialogContent>
          {children}
        </DialogContent>
      )}

      <DialogActions>
        <Button onClick={onClose} color="primary" variant="outlined">
          {cancelActionText}
        </Button>
        <Button
          onClick={onConfirm}
          color="primary"
          variant="contained"
        >
          {confirmActionText}
        </Button>
      </DialogActions>
    </Dialog>
  );
});


ConfirmDialogBase.propTypes = {
  /**
   * Cancel button text
   */
  cancelActionText: PropTypes.string,
  /**
   * Child elements of the dialog
   */
  children: PropTypes.element,
  /**
   * Text for confirm button
   */
  confirmActionText: PropTypes.string,
  /**
   * Dialog open/close state
   */
  isOpen: PropTypes.bool,
  /**
   * Message body. May be a string or a React component.
   */
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Close callback
   */
  onClose: PropTypes.func,
  /**
   * Confirmation callback
   */
  onConfirm: PropTypes.func,
  /**
   * Dialog title
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

ConfirmDialogBase.defaultProps = {
  cancelActionText: "Cancel",
  confirmActionText: "OK",
  onClose() { },
  onConfirm() { }
};

export default ConfirmDialogBase;
