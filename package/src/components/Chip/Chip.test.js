import React from "react";
import { render } from "../../tests/index.js";
import Chip from "./Chip";

test("basic snapshot - only default props", () => {
  const { asFragment } = render(<Chip />);
  expect(asFragment()).toMatchSnapshot();
});

test("error chip snapshot", () => {
  const { asFragment } = render(<Chip color="error" variant="contained" />);
  expect(asFragment()).toMatchSnapshot();
});
