import React from "react";
import { render } from "../../tests/index.js";
import Toast from "./Toast";

test("basic snapshot - only default props", () => {
  const { asFragment } = render(<Toast message="Test message" open/>);
  expect(asFragment()).toMatchSnapshot();
});
