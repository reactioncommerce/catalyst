### Overview

The DataTableFilter provides a component for displaying a set of filters as a dropdown, or in cards.

### Usage

#### Types

##### Filter dropdown

```jsx
const options = [{
  label: "New",
  value: "new"
},{
  label: "Processing",
  value: "processing"
},{
  label: "Completed",
  value: "completed"
},{
  label: "Canceled",
  value: "canceled"
}];

<DataTableFilter
  options={options}
  title="Order Status"
/>
```

##### Card container

```jsx
const options = [{
  label: "New",
  value: "new"
},{
  label: "Processing",
  value: "processing"
},{
  label: "Completed",
  value: "completed"
},{
  label: "Canceled",
  value: "canceled"
}];

<>
  <DataTableFilter
    options={options}
    title="Order Status"
    container="card"
    value={"canceled"}
  />
  <DataTableFilter
    options={options}
    title="Payment Status"
    container="card"
    value={"canceled"}
  />
  <DataTableFilter
    options={options}
    title="Fulfillment Status"
    container="card"
    value={"canceled"}
  />
</>
```

##### Filters in a button group

```jsx
import { ButtonGroup } from "@material-ui/core";

const options = [{
  label: "New",
  value: "new"
},{
  label: "Processing",
  value: "processing"
},{
  label: "Completed",
  value: "completed"
},{
  label: "Canceled",
  value: "canceled"
}];

<ButtonGroup>
  <DataTableFilter
    options={options}
    title="Order Status"
    value={"canceled"}
  />
  <DataTableFilter
    options={options}
    title="Payment Status"
    value={"canceled"}
  />
  <DataTableFilter
    isMultiSelect
    onSelect={(values) => console.log(values)}
    options={options}
    title="Fulfillment Status"
    value={"canceled"}
  />
</ButtonGroup>
```

##### Filters in a side drawer

```jsx
import { useState } from "react";
import { Drawer } from "@material-ui/core";
import Button from "../Button";

const options = [{
  label: "New",
  value: "new"
},{
  label: "Processing",
  value: "processing"
},{
  label: "Completed",
  value: "completed"
},{
  label: "Canceled",
  value: "canceled"
}];

function DrawerExample() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button
        color="primary"
        onClick={() => setOpen(true)}
        container="outlined"
      >
        Open Drawer
      </Button>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setOpen(false)}
      >
        <DataTableFilter
          options={options}
          title="Order Status"
          container="card"
          value={"canceled"}
        />
        <DataTableFilter
          options={options}
          title="Payment Status"
          container="card"
          value={"canceled"}
        />
        <DataTableFilter
          options={options}
          title="Fulfillment Status"
          container="card"
          value={"canceled"}
        />
      </Drawer>
    </>
  )
}

<DrawerExample />
```