import React from "react";
import { render } from "../tests/index.js";
import DialogTitle from "./DialogTitle";

test("basic snapshot - only default props", () => {
  const { asFragment } = render(<DialogTitle>Archive 24 products?</DialogTitle>);
  expect(asFragment()).toMatchSnapshot();
});
