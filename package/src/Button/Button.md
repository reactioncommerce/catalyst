### Overview

Buttons allow users to take an action such as add, save, cancel or delete. Buttons should clearly and simply communicate the action that will happen when they are pressed.

```jsx noeditor
<div style={{ marginBottom: "2rem", border: "1px solid #e6e6e6", padding: "1rem"}}>
  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evently", marginBottom: "1rem" }}>
    <div style={{marginRight: "1rem"}}>
      <Button variant="contained" color="primary">Solid</Button>
    </div>
    <div style={{marginRight: "1rem"}}>
      <Button variant="outlined" color="primary">Outlined</Button>
    </div>
    <div style={{marginRight: "1rem"}}>
      <Button>Text-only</Button>
    </div>
    <div style={{marginRight: "1rem"}}>
      <Button variant="contained" color="error">Error</Button>
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Button variant="outlined" color="error">Error</Button>
    </div>
  </div>
  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evently"}}>
    <div style={{marginRight: "1rem"}}>
      <Button size="small" variant="contained" color="primary">Solid</Button>
    </div>
    <div style={{marginRight: "1rem"}}>
      <Button size="small" variant="outlined" color="primary">Outlined</Button>
    </div>
    <div style={{marginRight: "1rem"}}>
      <Button size="small">Text-only</Button>
    </div>
    <div style={{marginRight: "1rem"}}>
      <Button size="small" variant="contained" color="error">Error</Button>
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Button size="small" variant="outlined" color="error">Error</Button>
    </div>
  </div>
</div>
```

### Usage

#### Types

##### Contained buttons

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="contained" color="primary">Contained</Button>
  </div>
</div>
```

##### Outlined buttons

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="outlined" color="primary">Outlined</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="outlined" color="error">Outlined</Button>
  </div>
</div>
```

##### Error buttons

The error button is used for a destructive action that is difficult to recover from such as deleting information. The error button should be used at the point that the destructive action actually takes place.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="contained" color="error">Error</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="outlined" color="error">Error</Button>
  </div>
</div>
```

##### Text buttons

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="text" color="primary">Text</Button>
  </div>
</div>
```

##### Small buttons

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button size="small" variant="contained" color="primary">Button</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button size="small" variant="outlined" color="primary">Button</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button size="small" variant="outlined" color="error" size="small">Error - Small</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button variant="text" size="small">Text - Small</Button>
  </div>
</div>
```

#### Example

##### Button groups

- Follow these patterns for groups of buttons in Cards and the Primary AppBar:

```jsx
<div>
  <Button style={{marginRight: "0.5rem"}} variant="text" color="primary">Discard</Button>
  <Button style={{marginRight: "0.5rem"}} variant="outlined" color="primary">Save changes</Button>
  <Button style={{marginRight: "0.5rem"}} variant="contained" color="primary">Publish</Button>
</div>
```

```jsx
<div>
  <Button style={{marginRight: "0.5rem"}} variant="outlined" color="primary">Cancel</Button>
  <Button style={{marginRight: "0.5rem"}} variant="contained" color="primary">OK</Button>
</div>
```


```jsx
<div>
  <Button style={{marginRight: "0.5rem"}} variant="outlined" color="primary">Cancel</Button>
  <Button style={{marginRight: "0.5rem"}} variant="contained" color="primary">Save</Button>
</div>
```

```jsx
<div>
  <Button style={{marginRight: "0.5rem"}} variant="outlined" color="primary">Cancel</Button>
  <Button style={{marginRight: "0.5rem"}} variant="contained" color="error">Delete</Button>
</div>
```

### API

The Catalyst Button inherits from the Material-UI [Button component](https://material-ui.com/components/buttons/). Refer to the Material-UI [Button API docs](https://material-ui.com/api/button/) for more information.