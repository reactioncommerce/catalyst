import React from "react";
import { render } from "../../tests/index.js";
import Chip from "./Chip";

test("basic snapshot - only default props", () => {
  const { asFragment } = render(<Chip />);
  expect(asFragment()).toMatchSnapshot();
});

test("deletable chip snapshot", () => {
  const onDelete = () => { };
  const { asFragment } = render(<Chip color="primary" variant="default" onDelete={onDelete} />);
  expect(asFragment()).toMatchSnapshot();
});

test("deletable chip in small, secondary sizesnapshot", () => {
  const onDelete = () => { };
  const { asFragment } = render(<Chip color="secondary" variant="default" onDelete={onDelete} size="small" />);
  expect(asFragment()).toMatchSnapshot();
});


test("error chip snapshot", () => {
  const { asFragment } = render(<Chip color="error"/>);
  expect(asFragment()).toMatchSnapshot();
});
