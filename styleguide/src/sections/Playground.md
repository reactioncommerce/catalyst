Test Material-UI components with default theme variables from Catalyst here:

#### Card

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

#### Tabs

```jsx
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

<Tabs value={0}>
    <Tab label={"Tag details"} />
    <Tab label={"Metadata"} />
    <Tab label={"Products"} />
</Tabs>
```