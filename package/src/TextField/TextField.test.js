import React from "react";
import { MenuItem } from "@material-ui/core";
import { render } from "../tests/index.js";
import TextField from "./TextField";

test("snapshot - singleline", () => {
  const { asFragment } = render(<TextField value="hello" />);
  expect(asFragment()).toMatchSnapshot();
});

test("snapshot - singleline - disabled", () => {
  const { asFragment } = render(<TextField value="hello" disabled />);
  expect(asFragment()).toMatchSnapshot();
});

test("snapshot - singleline - error", () => {
  const { asFragment } = render(<TextField value="hello" error helpText="Help text" />);
  expect(asFragment()).toMatchSnapshot();
});

test("snapshot - multiline", () => {
  const { asFragment } = render(<TextField value="hello" multiline />);
  expect(asFragment()).toMatchSnapshot();
});

test("snapshot - multiline - expanded", () => {
  const { asFragment } = render(<TextField value="hello" multiline rows={4} />);
  expect(asFragment()).toMatchSnapshot();
});

test("snapshot - multiline - disabled", () => {
  const { asFragment } = render(<TextField value="hello" multiline disabled />);
  expect(asFragment()).toMatchSnapshot();
});

test("snapshot - multiline - error state", () => {
  const { asFragment } = render(<TextField value="hello" multiline error helpText="Help text" />);
  expect(asFragment()).toMatchSnapshot();
});

test("snapshot - select", () => {
  const { asFragment } = render((
    <TextField
      value={1}
      select
    >
      <MenuItem value={1}>Option 1</MenuItem>
      <MenuItem value={2}>Option 2</MenuItem>
      <MenuItem value={3}>Option 3</MenuItem>
    </TextField>
  ));
  expect(asFragment()).toMatchSnapshot();
});

test("snapshot - select - disabled", () => {
  const { asFragment } = render((
    <TextField
      value={1}
      select
      disabled
    >
      <MenuItem value={1}>Option 1</MenuItem>
      <MenuItem value={2}>Option 2</MenuItem>
      <MenuItem value={3}>Option 3</MenuItem>
    </TextField>
  ));
  expect(asFragment()).toMatchSnapshot();
});

test("snapshot - select - error state", () => {
  const { asFragment } = render((
    <TextField
      value={1}
      select
      error
    >
      <MenuItem value={1}>Option 1</MenuItem>
      <MenuItem value={2}>Option 2</MenuItem>
      <MenuItem value={3}>Option 3</MenuItem>
    </TextField>
  ));
  expect(asFragment()).toMatchSnapshot();
});
