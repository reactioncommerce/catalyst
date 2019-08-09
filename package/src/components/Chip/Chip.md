### Overview

Chips are compact visual elements that are used to present information to an operator to communicate status or feedback on an action taken. Chips can be used to represent tags, badges, and other compact bits of information to a user.

[Chips](https://material.io/design/components/chips.html) allow users to enter information, make selections, filter content, or trigger actions.

The Catalyst Chip inherits from the Material-UI [Chip component](https://material-ui.com/components/chips/). Refer to the Material-UI [Chip API docs](https://material-ui.com/api/chip/) for more information.

### Usage

<!-- Show all the variants/combos we use in Reaction Admin, without the code box > -->

```jsx noeditor
const onDelete = () => { console.log("stuff") };
<div>
  <div style={{ display: "flex" }}>
    <div style={{ marginRight: "1rem" }}>
      <Chip label="stuff.csv" variant="outlined" color="primary" onDelete={onDelete} />
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Chip color="error" label="Order Cancelled" />
    </div>
  </div>
</div>
```

#### Types

<!-- Show all Types of the component used in Reaction Admin -->

##### Deletable chip

<!-- Explain when to use this type of the component, and give a real life Reaction Admin example -->

Use a Deletable chip to allow a user to remove something, like removing a tag from a filter. To create a Deletable chip, pass a Delete function to `onDelete`.

```jsx
const onDelete = () => { console.log("stuff") };
<Chip label="stuff.csv" variant="outlined" color="primary" onDelete={onDelete} />
```

##### Error chip

<!-- Explain when to use this type of the component, and give a real life Reaction Admin example -->

The error chip is used to indicate an error status, such as when an order has been cancelled.

```jsx
<Chip color="error" label="Order Cancelled" />
```
