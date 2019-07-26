import React from "react";
import { cleanup, render } from "../../tests/index.js";
import DialogTitle from "./DialogTitle";

afterEach(cleanup);

test("basic snapshot - only default props", () => {
  const { asFragment } = render(<DialogTitle>Archive 24 products?</DialogTitle>);
  expect(asFragment()).toMatchSnapshot();
});
