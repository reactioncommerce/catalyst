Cards in Reaction Admin can be used to display information and forms for users.

Use Material-UI's Card with icons from `mdi-material-ui` and Catalyst's default theme variables to create Basic cards and Quick Edit cards in Reaction Admin.

#### Basic Card

```jsx
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import CloseIcon from "mdi-material-ui/Close";

<Card>
    <CardHeader
        title={"All products"}
        subheader={"1239 products"}
    />
    <CardContent>
        <Typography variant="body2">Help text goes here</Typography>
    </CardContent>
</Card>
```

#### Quick Edit Card

```jsx
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import CloseIcon from "mdi-material-ui/Close";

<Card>
    <CardHeader
        title={"All products"}
        subheader={"1239 products"}
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