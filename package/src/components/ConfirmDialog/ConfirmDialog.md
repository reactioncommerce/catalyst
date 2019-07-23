### Overview

The ConfirmDialog component uses [Dialog](https://material-ui.com/api/dialog), DialogActions, DialogContent, DialogContentText, DialogTitle and Button from Material-UI.

### Usage

The `ConfirmDialog` component provides a standard confirmation alert base on some user action. Pass a callback function to `onConfirm()` to allow the user to take an action after clicking the confirmation button.

```jsx
import Button from "../Button";

<ConfirmDialog
  title="Are you sure?"
  message="Are you sure you want to do that?"
  onConfirm={() => { alert("Action confirmed!") }}
>
  {({ openDialog }) => (
    <Button color="primary" onClick={openDialog} variant="contained">Open Confirm Dialog</Button>
  )}
</ConfirmDialog>
```
