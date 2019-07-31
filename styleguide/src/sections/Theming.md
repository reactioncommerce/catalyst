Components of the Reaction Catalyst component library can be visually customized with the Material-UI theme.

#### Add a ThemeProvider

To apply a custom theme to the components in your app, wrap your entire app with `ThemeProvider`:

```js static
import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core/styles";

const theme = {};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* app components here */}
      </ThemeProvider>
    );
  }
}
```

#### The theme object

A `theme` prop is passed to your `ThemeProvider`. This is simply a JavaScript object. See the base [Material-UI theme](https://material-ui.com/customization/default-theme/) for an example.
