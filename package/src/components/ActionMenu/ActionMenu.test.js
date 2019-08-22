import React from "react";
import { fireEvent, render, waitForElement } from "../../tests/index.js";
import ActionMenu from "./ActionMenu";

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
  const { asFragment } = render(<ActionMenu options={options}>Actions</ActionMenu>);
  expect(asFragment()).toMatchSnapshot();
});

test("select an option", async () => {
  const onSelect = jest.fn();
  const { asFragment, getAllByText, getByText } = render(<ActionMenu onSelect={onSelect} options={options}>Actions</ActionMenu>);
  fireEvent.click(getAllByText("Actions")[0]);
  const removeButton = await waitForElement(() => getByText("Remove tags from products"));
  fireEvent.click(removeButton);
  expect(onSelect).toHaveBeenCalled();
  expect(asFragment()).toMatchSnapshot();
});
