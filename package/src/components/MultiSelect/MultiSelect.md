Multi value select with options provided synchronously 
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

Multi value select with options provided asynchronously 
```jsx
const options = [
  { value: "mens", label: "Mens" },
  { value: "womens", label: "Womens" },
  { value: "kids", label: "Kids" }
];

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
  placeholder="Select tags"
  />
```
