import React from "react";
import { render, fireEvent } from "../../tests/";
import "@testing-library/jest-dom/extend-expect";
import Button from "../Button";
import ConfirmDialog from "./ConfirmDialog";

test("basic snapshot - with opening the dialog", () => {
  /* eslint-disable function-paren-newline */
  const { asFragment, getByText, getByRole } = render(
    <ConfirmDialog
      title="Are you sure?"
      message="Are you sure you want to do that?"
    >
      {({ openDialog }) => (
        <Button color="primary" onClick={openDialog} variant="contained">Open Confirm Dialog</Button>
      )}
    </ConfirmDialog>);
  fireEvent.click(getByText("Open Confirm Dialog"));
  expect(getByRole("dialog")).toBeInTheDocument();
  expect(getByRole("dialog")).toHaveTextContent("Are you sure you want to do that?");
  expect(getByRole("dialog")).toHaveTextContent("Are you sure?");
  expect(getByRole("dialog")).toHaveTextContent("OK");
  expect(getByRole("dialog")).toHaveTextContent("Cancel");
  expect(getByRole("dialog")).toMatchSnapshot();
  expect(asFragment()).toMatchSnapshot();
});
