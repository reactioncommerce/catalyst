### Overview

The Catalyst Button inherits from the Material-UI [Button component](https://material-ui.com/components/buttons/). Refer to tne Material-UI [Button API docs](https://material-ui.com/api/button/) for more information. 

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

- **Solid button**: The solid button is used for a primary action in a modal, card, large view and generally throughout.
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

- **Disabled**: Docs go here. When do you use this button in Catalyst?

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="contained" isWaiting>isWaiting</Button>
  </div>
</div>
```

- **Full Width**: Docs go here. When do you use this button in Catalyst?

```jsx
<div style={{ display: "block" }}>
  <Button variant="contained" fullWidth>FullWidth</Button>
</div>
```

#### Catalyst-custom buttons

- **Danger button**: The danger button is used for a destructive action that is difficult to recover from such as deleting information. The danger button should be used at the point that the destructive action actually takes place. For example, you can have a delete button as a secondary action on a page and in this case you would use a an outline button, the outline button would then trigger a modal confirmation, which is where you would use the danger button.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="contained" color="danger">Danger - Contained</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="outlined" color="danger">Danger - Outlined</Button>
  </div>
</div>
```

- **isWaiting**: Docs go here.

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

