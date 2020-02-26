import React from "react";
import { render, fireEvent } from "../tests/";
import Button from "../Button";
import ConfirmDialog from "./ConfirmDialog";
import useConfirmDialog from "./helpers/useConfirmDialog";

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


test("basic snapshot - with opening the dialog using the useConfirmDialog hook", () => {
  // eslint-disable-next-line require-jsdoc
  function TestComponent() {
    const { openDialog, ConfirmDialog: ConfirmDialogComponent } = useConfirmDialog({
      title: "Are you sure?",
      message: "Are you sure you want to do that?"
    });

    return (
      <>
        <Button color="primary" onClick={openDialog} variant="contained">Open Confirm Dialog</Button>
        <ConfirmDialogComponent />
      </>
    );
  }

  const { asFragment, getByText, getByRole } = render(<TestComponent />);

  fireEvent.click(getByText("Open Confirm Dialog"));
  expect(getByRole("dialog")).toBeInTheDocument();
  expect(getByRole("dialog")).toHaveTextContent("Are you sure you want to do that?");
  expect(getByRole("dialog")).toHaveTextContent("Are you sure?");
  expect(getByRole("dialog")).toHaveTextContent("OK");
  expect(getByRole("dialog")).toHaveTextContent("Cancel");
  expect(getByRole("dialog")).toMatchSnapshot();
  expect(asFragment()).toMatchSnapshot();
});

test("basic snapshot - with opening the dialog using the useConfirmDialog hook with more content", () => {
  // eslint-disable-next-line require-jsdoc, react/no-multi-comp
  function TestComponent() {
    const { openDialog, ConfirmDialog: ConfirmDialogComponent } = useConfirmDialog({
      title: "Are you sure?",
      content: <span>More content</span>,
      message: "Are you sure you want to do that?"
    });

    return (
      <>
        <Button color="primary" onClick={openDialog} variant="contained">Open Confirm Dialog</Button>
        <ConfirmDialogComponent />
      </>
    );
  }

  const { asFragment, getByText, getByRole } = render(<TestComponent />);

  fireEvent.click(getByText("Open Confirm Dialog"));
  expect(getByRole("dialog")).toBeInTheDocument();
  expect(getByRole("dialog")).toHaveTextContent("Are you sure you want to do that?");
  expect(getByRole("dialog")).toHaveTextContent("More content");
  expect(getByRole("dialog")).toHaveTextContent("Are you sure?");
  expect(getByRole("dialog")).toHaveTextContent("OK");
  expect(getByRole("dialog")).toHaveTextContent("Cancel");
  expect(getByRole("dialog")).toMatchSnapshot();
  expect(asFragment()).toMatchSnapshot();
});
