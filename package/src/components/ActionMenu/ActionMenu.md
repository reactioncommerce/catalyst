### Overview

The Catalyst ActionMenu is based on the the Material-UI example for [Menus](https://material-ui.com/components/menus/). It uses the Catalyst [Button](https://catalyst.reactioncommerce.com/#/Components/Actions/Button) and the Material-UI [Menu](https://material-ui.com/api/menu/) components.

### Usage

#### Simple ActionMenu

This is basic example of how to implement the ActionMenu.

```jsx
const options = [{
  label: "Add tags to products"
}, {
  label: "Remove tags from products",
  isDestructive: true
}, {
  label: "Remove all tags from products",
  isDisabled: true,
  isDestructive: true
}];

<ActionMenu
  options={options}
  onSelect={(option, index) => alert(`Selected option "${option.label}" at index (${index})`)}
>
  Actions
</ActionMenu>
```

#### Set the default selected option

Set the default selected option by index.

```jsx
const options = [{
  label: "Add tags to products"
}, {
  label: "Remove tags from products"
}, {
  label: "Remove all tags from products",
  isDisabled: true
}];

<ActionMenu
  options={options}
  onSelect={(option, index) => alert(`Selected option "${option.label}" at index (${index})`)}
>
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