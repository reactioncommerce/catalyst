### Overview

### Usage

The `ConfirmDialog` component provides a standard confirmation alert base on some user action.

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
