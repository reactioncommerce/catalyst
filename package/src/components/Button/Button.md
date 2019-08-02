### Overview

The Catalyst Button inherits from the Material-UI [Button component](https://material-ui.com/components/buttons/). Refer to the Material-UI [Button API docs](https://material-ui.com/api/button/) for more information. 

### Usage


#### Default Catalyst button

This is what a button with all the default prop options looks like:

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button>Text-only</Button>
  </div>
</div>
```

It's a button with `variant` set to `text`, `size` set to `medium`, `color` set to `default`.

#### Material UI options

- **Solid (Contained) button**: The solid button is used for a primary action in a modal, card, large view and generally throughout.
- **Outline button**: The outline button is used for a secondary or dismissive action. The outline button should be paired with the solid button in cases such as dismissing a modal or canceling an action.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button>Text-only</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="contained">Solid</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="outlined">Outlined</Button>
  </div>
</div>
```

- **Disabled**:

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="contained" disabled>Disabled</Button>
  </div>
</div>
```

- **Full Width**:

```jsx
<div style={{ display: "block" }}>
  <Button variant="contained" fullWidth>FullWidth</Button>
</div>
```

#### Catalyst-custom buttons

- **Error button**: The error button is used for a destructive action that is difficult to recover from such as deleting information. The error button should be used at the point that the destructive action actually takes place. For example, you can have a delete button as a secondary action on a page and in this case you would use a an outline button, the outline button would then trigger a modal confirmation, which is where you would use the error button.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="contained" color="error">Error - Contained</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="outlined" color="error">Error - Outlined</Button>
  </div>
</div>
```

- **isWaiting**: The `isWaiting` prop combines `disabled` with a CircularProgress animation.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="contained" isWaiting>isWaiting - Contained</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="outlined" isWaiting>isWaiting - Outlined</Button>
  </div>
</div>
```

- **isShortHeight**: The `isShortHeight` prop halves the vertical padding of the button contents from 10px to 5px. This is useful for tighter spaces such as table headers.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="contained" isShortHeight>isShortHeight - Contained</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="outlined" isShortHeight>isShortHeight - Outlined</Button>
  </div>
</div>
```
