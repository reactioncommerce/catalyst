import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

/**
 * @name ConfirmDialog
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
function ConfirmDialog(props) {
  const { children, title, message, confirmActionText, cancelActionText, onConfirm } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      {children({
        openDialog: () => {
          setIsOpen(true);
        }
      })}
      <Dialog
        aria-labelledby="confirm-action-dialog-title"
        maxWidth="sm"
        onClose={handleClose}
        open={isOpen}
      >
        <DialogTitle id="confirm-action-dialog-title">{title}</DialogTitle>
        {message && (
          <DialogContent>
            <DialogContentText>{message}</DialogContentText>
          </DialogContent>
        )}

        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            {cancelActionText}
          </Button>
          <Button
            onClick={() => {
              onConfirm();
              setIsOpen(false);
            }}
            color="primary"
            variant="contained"
          >
            {confirmActionText}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}


ConfirmDialog.propTypes = {
  /**
   * Cancel button text
   */
  cancelActionText: PropTypes.string,
  /**
   * Render prop `{({ openDialog }) => ()}`
   */
  children: PropTypes.func.isRequired,
  /**
   * Text for confirm button
   */
  confirmActionText: PropTypes.string,
  /**
   * Message body. May be a string or a React component.
   */
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Confirmation callback
   */
  onConfirm: PropTypes.func,
  /**
   * Dialog title
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

ConfirmDialog.defaultProps = {
  cancelActionText: "Cancel",
  confirmActionText: "OK",
  onConfirm() { }
};

export default ConfirmDialog;
