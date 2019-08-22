### Overview

All Catalyst components and text use default styles as specified in the Typography component and theme. See the [Material-UI docs for Typography](https://material-ui.com/api/typography/) for more details.

### Types

Use these default types by specifying the correct `variant` from below:

#### Headers

Use headers in the Primary App Bar, the titles of Cards, Inline Alerts, the Confirm Dialog and more. Header text by default is not bolded. Use `fontWeightSemiBold` to add emphasis.

```jsx
import Typography from "@material-ui/core/Typography";
import { typography } from '@material-ui/system';
<div style={{border: "1px solid black", padding: "30px"}}>
  <Typography variant="h1" gutterBottom>
  h1. Connecting the world through commerce
  </Typography>
  <Typography variant="h2" gutterBottom>
  h2. Connecting the world through commerce
  </Typography>
  <Typography variant="h3" gutterBottom>
  h3. Connecting the world through commerce
  </Typography>
  <Typography variant="h4" gutterBottom>
  h4. Connecting the world through commerce
  </Typography>
  <Typography variant="h5" gutterBottom>
  h5. Connecting the world through commerce
  </Typography>
  <Typography variant="h6" gutterBottom>
  h6. Connecting the world through commerce
  </Typography>
</div>
```

#### Body text

Body text is used in Tables and various Card content.

```jsx
import Typography from "@material-ui/core/Typography";
<div style={{border: "1px solid black", padding: "30px"}}>
  <Typography variant="body1" style={{paddingBottom: "20px"}} >
  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
  unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
  dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
  </Typography>
  <Typography variant="body2" gutterBottom>
  body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
  unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
  dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
  </Typography>
</div>
```

#### Captions

Captions are used in Chips and help text under form fields, often in a lighter color.

```jsx
import Typography from "@material-ui/core/Typography";
<div style={{border: "1px solid black", padding: "30px"}}>
  <Typography variant="caption" gutterBottom>
    caption text
  </Typography>
</div>
```

#### Buttons

Button text always uses font weight of semibold, unless it is a text-only button. Button text can be in dark colors, or white.

```jsx
import Typography from "@material-ui/core/Typography";
<div style={{border: "1px solid black", padding: "30px"}}>
  <Typography variant="button" gutterBottom>
    Button
  </Typography>
</div>
```