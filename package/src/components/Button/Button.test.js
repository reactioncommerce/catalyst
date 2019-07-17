import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../tests/mockComponents";
import Button from "./Button";

test("basic snapshot", () => {
  const component = renderer.create(<Button components={mockComponents} title="title" className="a b">Submit</Button>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

