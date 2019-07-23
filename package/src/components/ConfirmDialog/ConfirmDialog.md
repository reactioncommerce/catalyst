### Overview

The `ConfirmDialog` component uses [Dialog](https://material-ui.com/api/dialog), [DialogActions](https://material-ui.com/api/dialog-actions/), [DialogContent](https://material-ui.com/api/dialog-content/), [DialogContentText](https://material-ui.com/api/dialog-content-text/), [Button](https://material-ui.com/api/button/) from Material-UI and [DialogTitle](http://localhost:4060/#/Base%20Components/Feedback/DialogTitle) from Catalyst.

### Usage

The `ConfirmDialog` component provides a standard confirmation alert base on some user action. Pass a callback function to `onConfirm()` to allow the user to take an action after clicking the confirmation button.

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
