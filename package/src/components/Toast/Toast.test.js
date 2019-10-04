import React from "react";
import { render } from "../../tests/index.js";
import Toast from "./Toast";

test("basic snapshot - only default props", () => {
  const { asFragment } = render(<Toast message="Test message" open/>);
  expect(asFragment()).toMatchSnapshot();
});

test("basic snapshot - information variant", () => {
  const { asFragment } = render(<Toast message="Test message" variant="info" open/>);
  expect(asFragment()).toMatchSnapshot();
});

test("basic snapshot - success variant", () => {
  const { asFragment } = render(<Toast message="Test message" variant="success" open/>);
  expect(asFragment()).toMatchSnapshot();
});

test("basic snapshot - error variant", () => {
  const { asFragment } = render(<Toast message="Test message" variant="error" open/>);
  expect(asFragment()).toMatchSnapshot();
});

test("basic snapshot - warning variant", () => {
  const { asFragment } = render(<Toast message="Test message" variant="warning" open/>);
  expect(asFragment()).toMatchSnapshot();
});
