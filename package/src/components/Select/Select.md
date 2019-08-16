### Overview
The `Select` component provides functionality to select single or multiple value(s) with
autocompletion; options may be provided synchronously or asynchronously. Under the hood, the [react-select](https://react-select.com) component is used.

**NOTE**: In addition to the props listed above, all props supported by `react-select` will be passed through. To see the full list click [here](https://react-select.com/props)

### Usage

#### Basic Single Select
Single value select with options provided synchronously:
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

<Select 
  onSelection={handleOnSelection}
  options={options}
  placeholder="Select a tag"
  />
```

#### Basic Multi Select
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

<Select 
  isMulti
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

<Select 
  isMulti
  isAsync
  cacheOptions 
  defaultOptions 
  loadOptions={promiseOptions}
  onSelection={handleOnSelection}
  placeholder="Search tags"
  />
```
