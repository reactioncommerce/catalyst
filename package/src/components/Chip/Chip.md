### Overview

The Catalyst Chip inherits from the Material-UI [Chip component](https://material-ui.com/components/chips/). Refer to tne Material-UI [Chip API docs](https://material-ui.com/api/chip/) for more information. 

### Usage

#### Default Catalyst chip

This is what a chip with all the default prop options looks like:

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Chip label="Default" />
  </div>
</div>
```

It's a chip with `variant` set to `outlined`, and `color` set to `primary`.

#### Catalyst-custom chips

- **Error chip**: The error chip is used to indicate an error condition.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Chip color="error" label="Error" />
  </div>
</div>
```

