### Overview
The `MultiSelect` component provides functionality to select multiple options with
autocompletion; options may be provided synchronously or asynchronously. Under the hood, it uses the [react-select](https://react-select.com) component.

### Usage

#### Basic
Multi value select with options provided synchronously:
```jsx
const options = [
  { value: "mens", label: "Mens" },
  { value: "womens", label: "Womens" },
  { value: "kids", label: "Kids" }
];

// Log selected value
function handleOnSelection(value) {
  console.log("Selected value: ", value);
}

<MultiSelect 
  onSelection={handleOnSelection}
  options={options}
  placeholder="Select tags"
  />
```

#### Async options
Multi value select with options provided asynchronously:
```jsx
import options from "./helpers/tagData";

const filterOptions = (inputValue) => options.filter((i) => {
  return i.label.toLowerCase().includes(inputValue.toLowerCase());
});

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterOptions(inputValue));
    }, 1000);
  });

// Log selected value
function handleOnSelection(value) {
  console.log("Selected value: ", value);
}

<MultiSelect 
  isAsync
  cacheOptions 
  defaultOptions 
  loadOptions={promiseOptions}
  onSelection={handleOnSelection}
  placeholder="Search tags"
  />
```
