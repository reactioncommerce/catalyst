### Overview

The Catalyst ActionMenu is based on the the Material-UI example for [Menus](https://material-ui.com/components/menus/). It uses the Catalyst [Button](https://catalyst.reactioncommerce.com/#/Components/Actions/Button) and the Material-UI [Menu](https://material-ui.com/api/menu/) components.

### Usage

#### Simple ActionMenu

This is basic example of how to implement the ActionMenu.

```jsx
const options = [{
  label: "Open"
}, {
  label: "Archived"
}, {
  label: "Shipped"
}, {
  label: "Canceled"
} ];

<ActionMenu
  options={options}
  onSelect={(option, index) => alert(`Selected option "${option.label}" at index (${index})`)}
>
  Set status
</ActionMenu>
```

#### Options with confirmation

ActionMenu options can be guarded with a confirmation dialog on selection. To achieve this, provide any combination of `confirmTitle` and `confirmMessage` as part of the option object. You may also supply an `onClick` handler to each option for more control of the "click" action. The `onSelect` callback will still fire when an item is selected. In most cases you'll want to avoid using `onSelect` and `onClick` for each option together unless you plan to do some advanced event handling using both.

```jsx
const options = [{
  label: "Filter by file",
  onClick: () => {
    console.log("Filter by file");
  }
}, {
  label: "Publish",
  confirmTitle: "Publish 32 products",
  confirmMessage: "Are you sure you want to publish 32 products to your storefront?",
  onClick: () => {
    console.log("Published 32 products");
  }
}, {
  label: "Make Visible",
  confirmTitle: "Make 32 products visible",
  confirmMessage: "Are you sure you want to make 32 products visible to customers?",
  onClick: () => {
    console.log("Made 32 products visible");
  }
}, {
  label: "Make Hidden",
  confirmTitle: "Make 32 products hidden",
  confirmMessage: "Are you sure you want to make 32 products hidden from customers?",
  onClick: () => {
    console.log("Made 32 products hidden");
  }
}, {
  label: "Duplicate",
  confirmTitle: "Duplicate 32 products",
  confirmMessage: "Are you sure you want to duplicate 32 products?",
  onClick: () => {
    console.log("Duplicated 32 products");
  }
}, {
  label: "Archive",
  confirmTitle: "Archive 32 products",
  confirmMessage: "Are you sure you want to archive 32 products? This will hide them from both admins and customers.",
  onClick: () => {
    console.log("Archived 32 products");
  }
}];

<ActionMenu options={options}>
  Actions
</ActionMenu>
```

#### Add detail text to options

Add a second line of text to the menu options to provide additional context to an action.

```jsx
const options = [{
  label: "Add tags to products",
  details: "Add the selected tags from the filtered products list provided."
}, {
  label: "Remove tags from products",
  details: "Remove the selected tags from the filtered products list provided."
}, {
  label: "Remove all tags from products",
  details: "Remove all tags from the filtered products list provided.",
  isDisabled: true
}];

<ActionMenu
  options={options}
  onSelect={(option, index) => alert(`Selected option "${option.label}" at index (${index})`)}
>
  Actions
</ActionMenu>
```

#### Other variations

```jsx
import { Grid } from "@material-ui/core";

const options = [{
  label: "Add tags to products",
  details: "Add the selected tags from the filtered products list provided."
}, {
  label: "Remove tags from products",
  details: "Remove the selected tags from the filtered products list provided."
}, {
  label: "Remove all tags from products",
  details: "Remove all tags from the filtered products list provided.",
  isDisabled: true
}];

const onSelect = (option, index) => alert(`Selected option "${option.label}" at index (${index})`);

<Grid container spacing={2}>
  <Grid item>
    <ActionMenu
      options={options}
      variant="contained"
      onSelect={onSelect}
    >
      Actions
    </ActionMenu>
  </Grid>
  <Grid item>
    <ActionMenu
      options={options}
      color="secondary"
      variant="contained"
      onSelect={onSelect}
    >
      Actions
    </ActionMenu>
  </Grid>
  <Grid item>
    <ActionMenu
      options={options}
      color="error"
      variant="contained"
      onSelect={onSelect}
    >
      Actions
    </ActionMenu>
  </Grid>
  <Grid item>
    <ActionMenu
      options={options}
      color="secondary"
      onSelect={onSelect}
    >
      Actions
    </ActionMenu>
  </Grid>
  <Grid item>
    <ActionMenu
      options={options}
      color="error"
      onSelect={onSelect}
    >
      Actions
    </ActionMenu>
  </Grid>
  <Grid item>
    <ActionMenu
      options={options}
      variant="text"
      onSelect={onSelect}
    >
      Actions
    </ActionMenu>
  </Grid>
</Grid>
```