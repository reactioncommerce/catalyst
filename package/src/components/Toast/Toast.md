### Overview

<!-- Get this short paragraph from design. -->

The X component inherits from the Material-UI [X component](https://material-ui.com/components/X/). Refer to the Material-UI [X docs](https://material-ui.com/api/X/) for more information.

### Usage

<!-- Show all the variants/combos we use in Reaction Admin, without the code box > -->

```jsx
<Toast
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  open
  autoHideDuration={6000}
  ContentProps={{
    'aria-describedby': 'message-id',
  }}
  message={"Note archived"}
  title={"Title"}
/>
```

#### Types

##### Information

<!-- Explain when to use this type of the component, and give a real life Reaction Admin example. If needed, add instruction for developers on how to set up the component. -->

Use a X component to allow a user to XX, such as XYXY.

```jsx
import Button from "../Button";
import IconButton from "@material-ui/core/IconButton";

function OpenToast(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClick}>Open information toast</Button>
      <Toast
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={props.message}
        variant={props.variant}
        title={props.title}
      />
    </div>
  );
}

<OpenToast message="Information toast" title="Info" variant="info" />
```

##### Success

<!-- Explain when to use this type of the component, and give a real life Reaction Admin example. If needed, add instruction for developers on how to set up the component. -->

Use a X component to allow a user to XX, such as XYXY.

```jsx
import Button from "../Button";
import IconButton from "@material-ui/core/IconButton";

function OpenToast(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>Open success toast</Button>
      <Toast
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={props.message}
        variant={props.variant}
      />
    </div>
  );
}

<OpenToast message="Success toast" variant="success" />
```

##### Warning

<!-- Explain when to use this type of the component, and give a real life Reaction Admin example. If needed, add instruction for developers on how to set up the component. -->

Use a X component to allow a user to XX, such as XYXY.

```jsx
import Button from "../Button";
import IconButton from "@material-ui/core/IconButton";

function OpenToast(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClick}>Open warning toast</Button>
      <Toast
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={props.message}
        variant={props.variant}
      />
    </div>
  );
}

<OpenToast message="Warning toast" variant="warning" />
```

##### Error

<!-- Explain when to use this type of the component, and give a real life Reaction Admin example. If needed, add instruction for developers on how to set up the component. -->

Use a X component to allow a user to XX, such as XYXY.

```jsx
import Button from "../Button";
import IconButton from "@material-ui/core/IconButton";

function OpenToast(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleClick}>Open error toast</Button>
      <Toast
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={props.message}
        variant={props.variant}
      />
    </div>
  );
}

<OpenToast message="Error toast" variant="error" />
```