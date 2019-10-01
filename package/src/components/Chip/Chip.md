### Overview

Chips are compact visual elements that are used to present information to an operator to communicate status or feedback on an action taken. Chips can be used to represent tags, badges, and other compact bits of information to a user.

[Chips](https://material.io/design/components/chips.html) allow users to enter information, make selections, filter content, or trigger actions.

The Catalyst Chip inherits from the Material-UI [Chip component](https://material-ui.com/components/chips/). Refer to the Material-UI [Chip API docs](https://material-ui.com/api/chip/) for more information.

### Usage

<!-- Show all the variants/combos we use in Reaction Admin, without the code box > -->

```jsx noeditor
const onDelete = () => {
  console.log("stuff");
};
<div>
  <div style={{ display: "flex" }}>
    <div style={{ marginRight: "1rem" }}>
      <Chip color="error" label="status chip" />
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Chip label="deletable chip" color="primary" onDelete={onDelete} />
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Chip
        label="small deletable chip for multiselect"
        color="secondary"
        size="small"
        onDelete={onDelete}
      />
    </div>
  </div>
</div>;
```

#### Types

<!-- Show all Types of the component used in Reaction Admin -->

##### Deletable chip

Use a Deletable chip to allow users to remove an entity, like removing a Tag from a filter input. To create a Deletable chip, pass a Delete function to `onDelete`, and use the `default` variant with the `primary` color.

```jsx
function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "swim-2019.csv" },
    { key: 1, label: "womens-2019.csv" },
    { key: 2, label: "mens-2019.csv" }
  ]);

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  return (
    <div>
      {chipData.map(data => {
        return (
          <Chip
            color="primary"
            key={data.key}
            label={data.label}
            onDelete={handleDelete(data)}
            style={{ marginRight: "4px" }}
          />
        );
      })}
    </div>
  );
}

<ChipsArray />;
```

##### Deletable chip for MultiSelects

Use a Deletable chip in components a MultiSelect to allow users to remove entities within another action. To create a Deletable chip for a Select or MultiSelect, use the `default` variant with the `secondary` color and `small` size props, along with p assing an `onDelete` function.

```jsx
function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "womens" },
    { key: 1, label: "mens" },
    { key: 2, label: "fall-winter-2019" }
  ]);

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  return (
    <div>
      {chipData.map(data => {
        return (
          <Chip
            color="secondary"
            size="small"
            key={data.key}
            label={data.label}
            onDelete={handleDelete(data)}
            style={{ marginRight: "4px" }}
          />
        );
      })}
    </div>
  );
}

<ChipsArray />;
```

##### Error chip

The Error chip is used to indicate an error status, such as when an order has been cancelled.

```jsx
<Chip color="error" label="Order Cancelled" />
```

##### All Chip variants

These are all the possible chip variants.

```jsx
function ChipsArray() {
  const handleDelete = chipToDelete => () => {
    alert("You clicked the delete button");
  };

  const [chipData, setChipData] = React.useState([
    [
      {
        label: "primary-default",
        color: "primary",
        variant: "default"
      },
      { label: "primary-outlined", color: "primary", variant: "outlined" },
      {
        label: "primary-deletable",
        color: "primary",
        key: 0,
        onDelete: handleDelete
      },
      {
        label: "primary-deletable-outlined",
        color: "primary",
        variant: "outlined",
        onDelete: handleDelete
      }
    ],
    [
      { label: "secondary-default", color: "secondary", variant: "default" },
      { label: "secondary-outlined", color: "secondary", variant: "outlined" },
      {
        label: "secondary-deletable",
        color: "secondary",
        onDelete: handleDelete
      },
      {
        label: "secondary-deletable-outlined",
        color: "secondary",
        variant: "outlined",
        onDelete: handleDelete
      }
    ],
    [
      { label: "error-default", color: "error" },
      { label: "error-outlined", color: "error", variant: "outlined" },
      {
        label: "error-deletable-outlined",
        color: "error",
        variant: "outlined",
        onDelete: handleDelete
      }
    ],
    [
      { label: "success-default", color: "success" },
      { label: "success-outlined", color: "success", variant: "outlined" },
      { label: "success-deletable", color: "success", onDelete: handleDelete },
      {
        label: "success-deletable-outlined",
        color: "success",
        variant: "outlined",
        onDelete: handleDelete
      }
    ],
    [
      { label: "info-default", color: "info" },
      {
        label: "info-outlined",
        color: "info",
        variant: "outlined"
      },
      {
        label: "info-deletable",
        color: "info",
        onDelete: handleDelete
      },
      {
        label: "info-deletable-outlined",
        color: "info",
        variant: "outlined",
        onDelete: handleDelete
      }
    ],
    [
      { label: "danger-default", color: "danger" },
      { label: "danger-outlined", color: "danger", variant: "outlined" },
      {
        label: "danger-deletable",
        color: "danger",
        onDelete: handleDelete
      },
      {
        label: "danger-deletable-outlined",
        color: "danger",
        variant: "outlined",
        onDelete: handleDelete
      }
    ]
  ]);

  return (
    <div>
      {chipData.map((chipRow, index) => {
        return (
          <div key={index} style={{ marginBottom: "8px" }}>
            {chipRow.map((data, chipIndex) => {
              return (
                <Chip
                  color="secondary"
                  {...data}
                  key={chipIndex}
                  label={data.label}
                  onDelete={data.onDelete && data.onDelete(data)}
                  style={{ marginRight: "4px" }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
<ChipsArray />;
```
