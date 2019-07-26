import React from "react";
import { render } from "../../tests/index.js";
import Button from "./Button";

test("basic snapshot - only default props", async () => {
  const { asFragment } = await render(<Button className="myBtn">Submit</Button>);
  expect(asFragment()).toMatchSnapshot();
});

// test("basic snapshot - with props for an Error button", async () => {
//   const { asFragment } = render(<Button className="myBtn" variant="contained" color="danger">Submit</Button>);
//   expect(asFragment()).toMatchSnapshot();
// });
