### Overview

Toasts are used to give action-based feedback messages and convey critical or informational account-related messages. Use Toasts when a user needs more detailed information for an action.

The Toast component inherits from the Material-UI [Snackbar component](https://material-ui.com/components/snackbars/). Refer to the Material-UI [Snackbar docs](https://material-ui.com/api/snackbar/) for more information.

### Usage

Toasts are most often used when the user has taken an action. Messages appear in context and communicate when that action is successful, unsuccessful, or that it otherwise needs attention and further context.

Language should be polite, clear and concise. Optionally, a title can be added to a Toast to give clarity, or when there are 2 or more lines of information to display.

Toasts should guide the user into taking corrective action if necessary.

Users should be able to dismiss Toasts when appropriate. Information and success alerts can close automatically after 10 seconds. Error alerts should be persistent, and close only when action is resolved.

#### Types

##### Default: Information

- Used when there is information or tips that users can benefit from
- Can close automatically after 10 seconds

```jsx
import Button from "../Button";
import IconButton from "@material-ui/core/IconButton";

function OpenToast(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Open information toast</Button>
      <Button variant="outlined" color="primary" onClick={() => setOpen(false)}>Close information toast</Button>
      <Toast
        open={open}
        onClose={handleClose}
        message={props.message}
        variant={props.variant}
        title={props.title}
      />
    </div>
  );
}

<OpenToast message={<span>Information toast</span>} />
```
##### Success

- Used when an action has been completed successfully
- Can close automatically after 10 seconds

```jsx
import Button from "../Button";
import IconButton from "@material-ui/core/IconButton";

function OpenToast(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Open success toast</Button>
      <Button variant="outlined" color="primary" onClick={() => setOpen(false)}>Close success toast</Button>
      <Toast
        open={open}
        onClose={handleClose}
        message={props.message}
        variant={props.variant}
        title={props.title}
      />
    </div>
  );
}

<OpenToast message={<span>Success toast</span>} variant="success" />
```

##### Warning

- Used when an action or item needs attention
- Should not close automatically, unless the action has been resolved

```jsx
import Button from "../Button";
import IconButton from "@material-ui/core/IconButton";

function OpenToast(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Open warning toast</Button>
      <Button variant="outlined" color="primary" onClick={() => setOpen(false)}>Close warning toast</Button>
      <Toast
        open={open}
        onClose={handleClose}
        message={props.message}
        variant={props.variant}
        title={props.title}
      />
    </div>
  );
}

<OpenToast message={<span>Warning toast</span>} variant="warning" />
```
##### Error

- Used when the system has failed to complete an action, or the user has made an error
- Should not close automatically, unless the action has been resolved

```jsx
import Button from "../Button";
import IconButton from "@material-ui/core/IconButton";

function OpenToast(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={() => setOpen(true)}>Open error toast</Button>
      <Button variant="outlined" color="error" onClick={() => setOpen(false)}>Close error toast</Button>
      <Toast
        open={open}
        onClose={handleClose}
        message={props.message}
        variant={props.variant}
        title={props.title}
      />
    </div>
  );
}

<OpenToast message={<span>Error toast</span>} variant="error" />
```

#### Toasts with Titles

- All toasts can also have a `Title`

```jsx
import Button from "../Button";
import IconButton from "@material-ui/core/IconButton";

function OpenToast(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Open title toast</Button>
      <Button variant="outlined" color="primary" onClick={() => setOpen(false)}>Close title toast</Button>
      <Toast
        open={open}
        onClose={handleClose}
        message={props.message}
        variant={props.variant}
        title={props.title}
      />
    </div>
  );
}

<OpenToast message={<span>Information toast with title</span>} title="Title" />
```