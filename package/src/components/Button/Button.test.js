import React from "react";
import renderer from "react-test-renderer";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { defaultTheme } from "../../theme/defaultTheme";
import mockComponents from "../../tests/mockComponents";
import Button from "./Button";

test("basic snapshot", () => {
  const component = renderer.create(<MuiThemeProvider theme={defaultTheme}>
    <Button components={mockComponents} title="title" className="a b">Submit</Button>
  </MuiThemeProvider>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

