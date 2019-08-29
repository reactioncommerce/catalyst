### Overview
The `Select` component provides functionality to select single or multiple value(s) with
autocompletion; options may be provided synchronously or asynchronously. 

Under the hood, the [react-select](https://react-select.com) component is used. In addition to the props listed above, all props supported by `react-select` will be passed through. To see the full list click [here](https://react-select.com/props).

### Usage

#### Single select

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

When the select is open:

```jsx
const options = [
  { value: "adult", label: "Adults" },
  { value: "kids", label: "Kids" }
];

// Log selected value
function handleOnSelection(value) {
  console.log("Selected value: ", value);
}

<div style={{marginBottom: "90px"}}>
  <Select 
    onSelection={handleOnSelection}
    options={options}
    placeholder="Select a tag"
    menuIsOpen
    />
</div>
```

#### MultiSelect

MultiSelect with options provided synchronously:
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

When the select is opened and there are no other values left:

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

<div style={{marginBottom: "50px"}}>
  <Select
    isMulti
    onSelection={handleOnSelection}
    options={options}
    placeholder="Select tags"
    value={options}
    menuIsOpen
    />
</div>
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
