### Overview

Buttons are used to enable a user to take an action. Buttons should clearly and simply communicate the action that will happen when they are pressed.

### Usage


#### Default button

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button>Text-only</Button>
  </div>
</div>
```

#### Variants

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

- **Danger button**: The danger button is used for a destructive action that is difficult to recover from such as deleting information. The danger button should be used at the point that the destructive action actually takes place. For example, you can have a delete button as a secondary action on a page and in this case you would use a an outline button, the outline button would then trigger a modal confirmation, which is where you would use the danger button.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="contained" color="danger">Danger</Button>
  </div>
</div>
```

- **isWaiting**: Docs go here.
- **Disabled**: Docs go here.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="contained" isWaiting>isWaiting</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="outlined" Disabled>Disabled</Button>
  </div>
</div>
```

- **Full Width**: Docs go here.

```jsx
<div style={{ display: "flex" }}>
  <Button variant="contained" fullWidth>FullWidth</Button>
</div>
```
