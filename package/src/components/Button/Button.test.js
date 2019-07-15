import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import mockComponents from "../../tests/mockComponents";
import Button from "./Button";

const fakeEvent = { preventDefault() {} };

test("basic snapshot", () => {
  const component = renderer.create(<Button components={mockComponents} title="title" className="a b">Submit</Button>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

