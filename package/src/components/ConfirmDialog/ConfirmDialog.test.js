import React from "react";
import renderer from "react-test-renderer";
import Button from "../Button";
import ConfirmDialog from "./ConfirmDialog";

test("basic snapshot", () => {
  const component = renderer.create((
    <ConfirmDialog
      title="Are you sure?"
      message="Are you sure you want to do that?"
    >
      {({ openDialog }) => (
        <Button color="primary" onClick={openDialog} variant="contained">Open Confirm Dialog</Button>
      )}
    </ConfirmDialog>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
