import React from "react";
import renderer from "react-test-renderer";
import Chip from "./Chip";

test("basic snapshot", () => {
  const component = renderer.create(<Chip title="title" className="a b"/>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

