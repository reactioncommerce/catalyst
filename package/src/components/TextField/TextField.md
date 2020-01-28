### Overview

The TextField component is a drop-in replacement for the Material-UI [TextField](https://material-ui.com/components/text-fields/). Refer to the Material-UI [TextField](https://material-ui.com/api/text-field/) for more information.

### Usage

#### Types

##### Single line text field

```jsx
<TextField
  label="Label"
  placeholder="Placeholder text"
/>
```

##### Multiline text area

```jsx
<TextField
  label="Label"
  placeholder="Placeholder text"
  multiline
/>
```

##### Select

```jsx
import { MenuItem } from "@material-ui/core";


<TextField
  label="Label"
  placeholder="Placeholder text"
  select
  defaultValue={1}
  onChange={(event) => console.log(`Selected option ${event.target.value}`)}
>
  <MenuItem value={1}>Option 1</MenuItem>
  <MenuItem value={2}>Option 2</MenuItem>
  <MenuItem value={3}>Option 3</MenuItem>
</TextField>
```

##### Single line text field states

```jsx
import {
  Table,
  TableBody,
  TableCell as MuiTableCell,
  TableHead,
  TableRow,
  withStyles
} from "@material-ui/core";

const TableCell = withStyles({
  root: {
    verticalAlign: "top"
  }
})(MuiTableCell);

<Table>
  <TableHead>
    <TableRow>
      <TableCell />
      <TableCell style={{width: "45%"}} />
      <TableCell style={{width: "45%"}}>{"With helper text"}</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>{"Enabled"}</TableCell>
      <TableCell style={{verticalAlign: "top"}}>
        <TextField
          label="Label"
          placeholder="Placeholder text"
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          helperText="Help text"
        />
      </TableCell>
    </TableRow>

    <TableRow>
      <TableCell>{"Filled"}</TableCell>
      <TableCell style={{verticalAlign: "top"}}>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          value="User input text"
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          helperText="Help text"
          value="User input text"
        />
      </TableCell>
    </TableRow>

    <TableRow>
      <TableCell>{"Disabled"}</TableCell>
      <TableCell style={{verticalAlign: "top"}}>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          disabled
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          helperText="Help text"
          disabled
        />
      </TableCell>
    </TableRow>

    <TableRow>
      <TableCell>{"Error"}</TableCell>
      <TableCell style={{verticalAlign: "top"}}>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          error
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          helperText="Error, here’s how you can fix it"
          error
        />
      </TableCell>
    </TableRow>
  </TableBody>
</Table>

```

##### Multiline states

```jsx
import {
  Table,
  TableBody,
  TableCell as MuiTableCell,
  TableHead,
  TableRow,
  withStyles
} from "@material-ui/core";

const TableCell = withStyles({
  root: {
    verticalAlign: "top"
  }
})(MuiTableCell);

<Table>
  <TableHead>
    <TableRow>
      <TableCell />
      <TableCell style={{width: "45%"}} />
      <TableCell style={{width: "45%"}}>{"With helper text"}</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>{"Enabled"}</TableCell>
      <TableCell style={{verticalAlign: "top"}}>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          multiline
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          helperText="Help text"
          multiline
        />
      </TableCell>
    </TableRow>

    <TableRow>
      <TableCell>{"Filled"}</TableCell>
      <TableCell style={{verticalAlign: "top"}}>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          value="User input text"
          multiline
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          helperText="Help text"
          value="User input text"
          multiline
        />
      </TableCell>
    </TableRow>

    <TableRow>
      <TableCell>{"Disabled"}</TableCell>
      <TableCell style={{verticalAlign: "top"}}>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          disabled
          multiline
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          helperText="Help text"
          disabled
        />
      </TableCell>
    </TableRow>

    <TableRow>
      <TableCell>{"Error"}</TableCell>
      <TableCell style={{verticalAlign: "top"}}>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          error
          multiline
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          helperText="Error, here’s how you can fix it"
          error
          multiline
        />
      </TableCell>
    </TableRow>

    <TableRow>
      <TableCell>{"Expanded"}</TableCell>
      <TableCell style={{verticalAlign: "top"}}>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          multiline
          rows={7}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Label"
          placeholder="Placeholder text"
          multiline
          rows={7}
        />
      </TableCell>
    </TableRow>
  </TableBody>
</Table>

```
