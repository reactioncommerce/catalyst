import React from "react";
import renderer from "react-test-renderer";
import DialogTitle from "./DialogTitle";

test("basic snapshot", () => {
  const component = renderer.create((
    <DialogTitle>Archive 24 products?</DialogTitle>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
