import React from "react";
import { cleanup, render } from "../../tests/index.js";
import Button from "./Button";

afterEach(cleanup);

test("basic snapshot - only default props", () => {
  const { asFragment } = render(<Button className="myBtn">Submit</Button>);
  expect(asFragment()).toMatchSnapshot();
});
