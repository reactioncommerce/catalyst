import React from "react";
import { fireEvent, render, waitForElement } from "../tests/index.js";
import ActionMenu from "./ActionMenu";

const options = [{
  label: "Add tags to products"
}, {
  label: "Remove tags from products"
}, {
  label: "Remove all tags",
  isDisabled: true
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

test("option onClick", async () => {
  const onClick = jest.fn();
  const optionsWithAnOnClick = [{
    label: "Add tags to products"
  }, {
    label: "Remove tags from products",
    onClick
  }, {
    label: "Remove all tags",
    isDisabled: true
  }];

  const { asFragment, getAllByText, getByText } = render(<ActionMenu options={optionsWithAnOnClick}>Actions</ActionMenu>);
  fireEvent.click(getAllByText("Actions")[0]);
  const removeButton = await waitForElement(() => getByText("Remove tags from products"));
  fireEvent.click(removeButton);
  expect(onClick).toHaveBeenCalled();
  expect(asFragment()).toMatchSnapshot();
});

test("option onClick with confirmation", async () => {
  const onClick = jest.fn();
  const optionsWithAnOnClick = [{
    label: "Add tags to products"
  }, {
    label: "Remove tags from products",
    confirmTitle: "Confirm action",
    confirmMessage: "Are you sure you want to do that?",
    onClick
  }, {
    label: "Remove all tags",
    isDisabled: true
  }];

  const { asFragment, getAllByText, getByText } = render(<ActionMenu options={optionsWithAnOnClick}>Actions</ActionMenu>);
  // Open the menu
  fireEvent.click(getAllByText("Actions")[0]);
  // Wait for open, then get the "Remove tags from products" button
  const removeButton = await waitForElement(() => getByText("Remove tags from products"));
  fireEvent.click(removeButton);
  // Wait for dialog to open then click the OK button
  const dialogConfirmButton = await waitForElement(() => getByText("OK"));
  fireEvent.click(dialogConfirmButton);
  expect(onClick).toHaveBeenCalled();
  expect(asFragment()).toMatchSnapshot();
});
