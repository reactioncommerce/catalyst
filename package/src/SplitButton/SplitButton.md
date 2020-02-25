### Overview

The Catalyst SplitButton is based on the the Material-UI example for a [SplitButton](https://material-ui.com/components/buttons/#split-button).

### Usage

#### Simple SplitButton

This is basic example of how to implement the SplitButton.

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

<SplitButton
  options={options}
  onClick={(option, index) => alert(`Selected option "${option.label}" at index (${index})`)}
/>
```

#### Set the default selected option

Set the default selected option by index.

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

<SplitButton
  initialSelectedOption={1}
  options={options}
  onClick={(option, index) => alert(`Selected option "${option.label}" at index (${index})`)}
/>
```

#### Add detail text to options

Add a second line of text to the menu options to provide additional context to an action.

```jsx
const options = [{
  label: "Add tags to products",
  details: "Add the selected tags from the filtered products list provided."
}, {
  label: "Remove tags from products",
  details: "Remove the selected tags from the filtered products list provided.",
  isDestructive: true
}, {
  label: "Remove all tags from products",
  details: "Remove all tags from the filtered products list provided.",
  isDisabled: true,
  isDestructive: true
}];

<SplitButton
  options={options}
  onClick={(option, index) => alert(`Selected option "${option.label}" at index (${index})`)}
/>