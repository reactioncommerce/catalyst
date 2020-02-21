### Overview

The `ConfirmDialog` component uses [Dialog](https://material-ui.com/api/dialog), [DialogActions](https://material-ui.com/api/dialog-actions/), [DialogContent](https://material-ui.com/api/dialog-content/), [DialogContentText](https://material-ui.com/api/dialog-content-text/), [Button](https://material-ui.com/api/button/) from Material-UI and [DialogTitle](/#/Components/Feedback/DialogTitle) from Catalyst.

### Usage

The `ConfirmDialog` component provides a standard confirmation alert base on some user action. Pass a callback function to `onConfirm()` to allow the user to take an action after clicking the confirmation button.


### Open Confirm dialog with a hook

This example shows how you can use the can use the confirm dialog with the `useConfirmDialog` hook. This method can also be used to open the dialog when there is no direct user interaction.

The hook `useConfirmDialog` accepts some of the same props as the `ConfirmDialog` component. The usage of the `useConfirmDialog` hook, and the available props are outlined in the examples below.

```js static
const {
  isOpen, // Boolean: Open state
  openDialog, // Function: Open dialog
  closeDialog, // Function: Close dialog
  dialog // React.Element: Render the dialog. Must be place somewhere in your rendered component.
} = useConfirmDialog({
  /* Available props */
  cancelActionText: "Cancel", // Optional: Default `Cancel`
  closeOnConfirm: true, // Optional: Default `true`. Should the dialog close on confirm.
  confirmActionText: "Ok", // Optional: Default `OK`
  content: <div></div>, // Content of the dialog. May be used alongside `message`
  message: "", // Text content of the dialog. May be used alongside `content`
  onClose: () => {}, // Callback on close. This is called after the dialog has been closed.
  onConfirm: () => {}, // Callback on confirmation.
  title // Title of the dialog.
});
```

```jsx
import Button from "../Button";
import useConfirmDialog from "./helpers/useConfirmDialog"

function MyComponent() {
  const {
    isOpen, // Boolean: Open state
    openDialog, // Function: Open dialog
    closeDialog, // Function: Close dialog
    dialog // React.Element: Render the dialog. Add somewhere in your component
  } = useConfirmDialog({ // ConfirmDialog props (see above example)
    title: "Archive 24 products?",
    message: "Archiving products removes them from both admin and customer views.",
    onConfirm: () => {
      alert("Action confirmed!")
    },
    onClose: () => {
      console.log("Dialog closed")
    }
  })

  return (
    <>
      <Button color="primary" onClick={openDialog} variant="contained">Open Confirm Dialog</Button>
      {dialog}
    </>
  )
}

MyComponent();
```

### Confirm dialog with additional content

```jsx
import { Avatar, List, ListItem, ListItemText, ListItemAvatar } from "@material-ui/core";
import Button from "../Button";
import useConfirmDialog from "./helpers/useConfirmDialog"

function MyComponent() {
  const { dialog, openDialog } = useConfirmDialog({
    title: "Update account permissions?",
    message: "Are you sure you want to update the permissions the following account(s)?",
    content: (
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>RC</Avatar>
          </ListItemAvatar>
          <ListItemText>
            Reaction Commerce
          </ListItemText>
        </ListItem>
      </List>
    ),
    onConfirm: () => {
      alert("Action confirmed!")
    }
  })

  return (
    <>
      <Button color="primary" onClick={openDialog} variant="contained">Open Confirm Dialog</Button>
      {dialog}
    </>
  )
}

MyComponent();
```

### Basic usage

```jsx
import Button from "../Button";

<ConfirmDialog
  title="Archive 24 products?"
  message="Archiving products removes them from both admin and customer views."
  onConfirm={() => { alert("Action confirmed!") }}
>
  {({ openDialog }) => (
    <Button color="primary" onClick={openDialog} variant="contained">Open Confirm Dialog</Button>
  )}
</ConfirmDialog>
```