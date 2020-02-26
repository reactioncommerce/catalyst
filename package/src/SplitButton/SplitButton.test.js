import React from "react";
import { fireEvent, render, waitForElement } from "../tests/index.js";
import SplitButton from "./SplitButton";

const options = [{
  label: "Add tags to products"
}, {
  label: "Remove tags from products",
  isDestructive: true
}, {
  label: "Remove all tags",
  isDisabled: true,
  isDestructive: true
}];

test("basic snapshot - only default props", () => {
  const { asFragment } = render(<SplitButton options={options} />);
  expect(asFragment()).toMatchSnapshot();
});

test("set initial selected option to destructive option snapshot", () => {
  const { asFragment, getByTestId } = render(<SplitButton initialSelectedOption={1} options={options} />);
  expect(getByTestId("splitButton-action-button")).toHaveTextContent("Remove tags from products");
  expect(asFragment()).toMatchSnapshot();
});

test("select destructive option", async () => {
  const { asFragment, getByTestId, getByText } = render(<SplitButton options={options} />);
  fireEvent.click(getByTestId("splitButton-dropdown-button"));
  const removeButton = await waitForElement(() => getByText("Remove tags from products"));
  fireEvent.click(removeButton);
  expect(getByTestId("splitButton-action-button")).toHaveTextContent("Remove tags from products");
  expect(asFragment()).toMatchSnapshot();
});
