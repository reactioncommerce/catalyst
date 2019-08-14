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
      <Chip label="deletable chip" variant="default" color="primary" onDelete={onDelete} />
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Chip label="small deletable chip for multiselect" variant="default" color="secondary" size="small" onDelete={onDelete} />
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

Use a Deletable chip to allow users to remove an entity, like removing a Tag from a filter input. To create a Deletable chip, pass a Delete function to `onDelete`, and use the `default` variant with the `primary` color.

```jsx
const onDelete = () => { console.log("stuff") };
<div>
  <Chip label="sale-fall2019.csv" variant="default" color="primary" onDelete={onDelete} />
</div>
```

##### Deletable chip for Selects, MultiSelects

Use a Deletable chip in components like a Select or MultiSelect to allow users to remove entities within another action. To create a Deletable chip for a Select or MultiSelect, use the `default` variant with the `secondary` color and `small` size props, along with p assing an `onDelete` function.

```jsx
const onDelete = () => { console.log("stuff") };
<div>
  <Chip label="sale" variant="default" color="secondary" size="small" onDelete={onDelete} />
  <Chip label="winter-specials" variant="default" color="secondary" size="small" onDelete={onDelete} />
  <Chip label="sale-fall2019" variant="default" color="secondary" size="small" onDelete={onDelete} />
</div>
```

##### Error chip

<!-- Explain when to use this type of the component, and give a real life Reaction Admin example -->

The Error chip is used to indicate an error status, such as when an order has been cancelled.

```jsx
<Chip color="error" label="Order Cancelled" />
```
