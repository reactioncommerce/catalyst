### Overview

<!-- Get this short paragraph from design. -->

The X component inherits from the Material-UI [X component](https://material-ui.com/components/X/). Refer to the Material-UI [X docs](https://material-ui.com/api/X/) for more information.

### Usage

<!-- Show all the variants/combos we use in Reaction Admin, without the code box > -->

```jsx noeditor
import Button from "../Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "mdi-material-ui/Close";

function OpenToast() {
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
      <Button variant="contained" color="primary" onClick={handleClick}>Open toast</Button>
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
        message={<span id="message-id">Note archived</span>}
      />
    </div>
  );
}

<OpenToast/>
```

#### Types

<!-- Show all Types of the component used in Reaction Admin -->

##### Name of type

<!-- Explain when to use this type of the component, and give a real life Reaction Admin example. If needed, add instruction for developers on how to set up the component. -->

Use a X component to allow a user to XX, such as XYXY.

```jsx
<Toast/>
```