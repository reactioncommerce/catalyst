import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import ConfirmDialogBase from "./helpers/ConfirmDialogBase";

/**
 * @name ConfirmDialog
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
const ConfirmDialog = React.forwardRef(function ConfirmDialog(props, ref) {
  const { children, content, ...otherProps } = props;
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      {children({
        openDialog: () => {
          setOpen(true);
        }
      })}
      <ConfirmDialogBase
        isOpen={isOpen}
        onClose={handleClose}
        ref={ref}
        children={content}
        {...otherProps}
      />
    </Fragment>
  );
});


ConfirmDialog.propTypes = {
  /**
   * Cancel button text
   */
  cancelActionText: PropTypes.string,
  /**
   * Render prop `{({ openDialog }) => ()}`
   */
  children: PropTypes.func,
  /**
   * Text for confirm button
   */
  confirmActionText: PropTypes.string,
  /**
   * Child elements of the dialog. Use if this for rendering a custom components in the dialog.
  */
  content: PropTypes.element,
  /**
   * Dialog open/close state
   */
  isOpen: PropTypes.bool,
  /**
   * Message body. May be a string or a React component. Use if your message is mostly text.
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

ConfirmDialog.defaultProps = {
  cancelActionText: "Cancel",
  confirmActionText: "OK",
  onClose() { },
  onConfirm() { }
};

export default ConfirmDialog;
