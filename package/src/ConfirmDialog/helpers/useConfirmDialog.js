import React, { useState } from "react";
import ConfirmDialogBase from "./ConfirmDialogBase";

/**
 * @summary React hook for creating detached confirm dialogs with ease
 * @param {Object} props Props to configure a confirm dialog
 * @param {String} props.cancelActionText Cancel button text
 * @param {Boolean} props.closeOnConfirm Close dialog on confirmation. Default `true`
 * @param {String} props.confirmActionText Text for confirm button
 * @param {ReactElement} props.content Child elements of the dialog. Use if this for rendering a custom components in the dialog.
 * @param {String|React.Element} props.message Message body. May be a String or a React component. Use if your message is mostly text.
 * @param {Function} props.onClose Close callback
 * @param {Function} props.onConfirm Confirmation callback
 * @param {String|React.Element} props.title Dialog title
 * @returns {Object} An object containing {openDialog: func, dialog: React.Element}
 */
export default function useConfirmDialog({
  content,
  children,
  closeOnConfirm = true,
  onClose = () => { },
  onConfirm = () => { },
  ...props
}) {
  const [isOpen, setOpen] = useState(false);

  const openDialog = () => setOpen(true);
  const closeDialog = () => {
    setOpen(false);
    onClose();
  };
  const handleConfirm = () => {
    onConfirm();

    if (closeOnConfirm) {
      closeDialog();
    }
  };

  return {
    isOpen,
    openDialog,
    closeDialog,
    ConfirmDialog() {
      return (
        <ConfirmDialogBase
          isOpen={isOpen}
          onClose={closeDialog}
          onConfirm={handleConfirm}
          children={content || children}
          {...props}
        />
      );
    }
  };
}
