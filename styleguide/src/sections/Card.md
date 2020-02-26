Cards in Reaction Admin can be used to display information and forms for users.

Use Material-UI's Card with icons from `mdi-material-ui` and Catalyst's default theme variables to create Basic cards and Quick Edit cards in Reaction Admin.

#### Basic Card

- Card with title and subheader

```jsx
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

<Card>
  <CardHeader
    title="All products"
    subheader="1239 products"
  />
  <CardContent>
    <Typography variant="body1">Ipsam ipsum harum iusto sint. Voluptas animi quaerat voluptate laudantium iure quasi est. Nemo ducimus nemo blanditiis explicabo eos velit. Aut eos ab quis asperiores ab esse ex est. Asperiores ut officia sed necessitatibus porro dolorem eligendi qui. Dolores quod sit accusamus impedit ipsam neque animi.</Typography>
  </CardContent>
</Card>
```

- Card with ActionMenu

```jsx
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import ActionMenu from "../../../package/src/ActionMenu";

const options = [{
  label: "Open"
}, {
  label: "Archived"
}, {
  label: "Shipped"
}, {
  label: "Canceled"
} ];

<Card>
  <CardHeader
    title="All products"
    subheader="1239 products"
  />
  <ActionMenu
    style={{marginTop: "16px", marginLeft: "16px", marginBottom: "16px"}}
    options={options}
    onSelect={(option, index) => alert(`Selected option "${option.label}" at index (${index})`)}
  >
    Actions
  </ActionMenu>
  <CardContent>
    <Typography variant="body1">Ipsam ipsum harum iusto sint. Voluptas animi quaerat voluptate laudantium iure quasi est. Nemo ducimus nemo blanditiis explicabo eos velit. Aut eos ab quis asperiores ab esse ex est. Asperiores ut officia sed necessitatibus porro dolorem eligendi qui. Dolores quod sit accusamus impedit ipsam neque animi.</Typography>
  </CardContent>
</Card>
```

#### Quick Edit Card

- With title

```jsx
import { Card, CardHeader, CardContent, IconButton, Typography } from "@material-ui/core";
import CloseIcon from "mdi-material-ui/Close";

<Card>
  <CardHeader
    title="Filter products by file"
    action={
      <IconButton aria-label="close">
        <CloseIcon/>
      </IconButton>
    }
  />
  <CardContent>
    <Typography variant="body2">Help text goes here</Typography>
  </CardContent>
</Card>
```

- With title and secondary title

```jsx
import { Card, CardHeader, CardContent, IconButton, Typography } from "@material-ui/core";
import CloseIcon from "mdi-material-ui/Close";

<Card>
  <CardHeader
    title="Add/remove tags"
    subheader="1022 selected"
    action={
      <IconButton aria-label="close">
        <CloseIcon/>
      </IconButton>
    }
  />
  <CardContent>
    <Typography variant="body2">Help text goes here</Typography>
  </CardContent>
</Card>
```