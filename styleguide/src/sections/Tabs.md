Tabs in Reaction Admin can be used as secondary navigation within an Admin page. Tabs are used in the Order details view and Tag details view.

Use Material-UI's Tabs and Tab components with Catalyt's default theme variables.

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