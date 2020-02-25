import React from "react";
import { render } from "../tests/index.js";
import DataTableFilter from "./DataTableFilter";

const options = [{
  label: "Created",
  value: "created"
}, {
  label: "Processing",
  value: "processing"
}, {
  label: "Canceled",
  isDisabled: "canceled"
}];

test("basic snapshot - only default props", () => {
  const { asFragment } = render(<DataTableFilter options={options} title="Filter" />);
  expect(asFragment()).toMatchSnapshot();
});
